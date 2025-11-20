import React, { useState, useCallback } from 'react';
import { Image, buildSrc } from '@imagekit/react';

const IKImage = ({
  src,
  alt = '',
  width = 400,
  height = 400,
  className = '',
  lazyLoad = true,
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Hide placeholder when main image is loaded
  const hidePlaceholder = useCallback(() => setShowPlaceholder(false), []);

  // Ref callback for the image element
  const imgRef = useCallback(
    (img) => {
      if (!img) return; // unmount safety

      // If the image has already loaded before ref assignment
      if (img.complete) {
        hidePlaceholder();
        return;
      }

      // Otherwise, listen for load
      img.addEventListener('load', hidePlaceholder);
      return () => img.removeEventListener('load', hidePlaceholder);
    },
    [hidePlaceholder],
  );

  // Build a blurred placeholder image (LQIP)
  const placeholderURL = buildSrc({
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    src,
    transformation: [
      {
        quality: 10,
        blur: 90,
      },
    ],
  });

  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      alt={alt}
      width={width}
      height={height}
      ref={imgRef}
      loading={lazyLoad ? 'lazy' : 'eager'}
      className={className}
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${placeholderURL})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }
          : {}
      }
      transformation={[{ width: width, height: height }]}
    />
  );
};

export default IKImage;
