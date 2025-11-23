import React from 'react';
import IKImage from '../components/IKImage';
import { Link } from 'react-router';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl md-text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800" to="/">
              John Doe
            </Link>
            <span>on</span>
            <Link className="text-blue-800" to="">
              Web Design
            </Link>
            <span>2 Days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
            vel ratione laborum veritatis, quam natus quae facilis repellat
            veniam?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <IKImage src="postImg.jpeg" className="rounded-2xl" width="600" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo
            ab, fugit consectetur mollitia totam dignissimos neque doloremque
            saepe amet libero tempore cumque esse. Iure ex accusantium
            laboriosam aliquid consequatur? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod impedit alias doloribus laborum
            atque modi vitae veniam ut cupiditate perspiciatis! Aspernatur
            praesentium alias repudiandae nesciunt pariatur numquam natus eius
            incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            consectetur aperiam illo necessitatibus fugiat hic ea nam commodi
            ratione soluta rerum vel voluptates nisi, architecto eum laborum.
            Excepturi quas adipisci ipsam hic praesentium eligendi dignissimos
            delectus molestias cupiditate, deleniti, explicabo aut itaque odit
            veniam ducimus quod enim, cumque pariatur illum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            totam officiis ut. Et ducimus aliquam excepturi eos molestias
            suscipit ab ipsa tempore consequatur dolores quos quibusdam, qui
            praesentium obcaecati mollitia, placeat ex minus. Unde nihil est
            earum tenetur veniam vitae soluta in totam, reiciendis dolorum
            aliquam eaque quasi, magnam praesentium quia, vero saepe minima
            veritatis temporibus illo a mollitia adipisci!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et aut
            corporis tempora adipisci. Cumque ex mollitia atque a doloribus
            impedit error saepe laboriosam et voluptas adipisci alias vitae est
            similique facilis vero aspernatur, officia, officiis tempora
            blanditiis suscipit quos? Esse nihil odio nemo quia.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quidem sed expedita maiores non, distinctio dolore magnam dolor
            error quas veritatis in doloremque eum architecto suscipit iusto
            molestias possimus magni laborum repudiandae provident blanditiis
            fugit perferendis! Rerum quam amet perferendis adipisci! Non dolorem
            enim harum repudiandae necessitatibus laboriosam itaque blanditiis
            dicta esse sunt tempora quae, maxime commodi pariatur at eos.
            Doloremque cumque illo commodi, nostrum nam non in facere suscipit
            vero aspernatur velit aut eveniet omnis illum repellendus. Quos, qui
            eius! Porro, asperiores vitae qui dignissimos natus dolore illum
            dolorum libero, in, ipsam debitis voluptatum! Optio voluptatibus
            minima nobis odio provident! Hic explicabo dicta placeat nemo
            delectus dolorum fugit laboriosam dignissimos culpa reiciendis
            pariatur architecto aspernatur alias, odit sed reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quidem sed expedita maiores non, distinctio dolore magnam dolor
            error quas veritatis in doloremque eum architecto suscipit iusto
            molestias possimus magni laborum repudiandae provident blanditiis
            fugit perferendis! Rerum quam amet perferendis adipisci! Non dolorem
            enim harum repudiandae necessitatibus laboriosam itaque blanditiis
            dicta esse sunt tempora quae, maxime commodi pariatur at eos.
            Doloremque cumque illo commodi, nostrum nam non in facere suscipit
            vero aspernatur velit aut eveniet omnis illum repellendus. Quos, qui
            eius! Porro, asperiores vitae qui dignissimos natus dolore illum
            dolorum libero, in, ipsam debitis voluptatum! Optio voluptatibus
            minima nobis odio provident! Hic explicabo dicta placeat nemo
            delectus dolorum fugit laboriosam dignissimos culpa reiciendis
            pariatur architecto aspernatur alias, odit sed reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quidem sed expedita maiores non, distinctio dolore magnam dolor
            error quas veritatis in doloremque eum architecto suscipit iusto
            molestias possimus magni laborum repudiandae provident blanditiis
            fugit perferendis! Rerum quam amet perferendis adipisci! Non dolorem
            enim harum repudiandae necessitatibus laboriosam itaque blanditiis
            dicta esse sunt tempora quae, maxime commodi pariatur at eos.
            Doloremque cumque illo commodi, nostrum nam non in facere suscipit
            vero aspernatur velit aut eveniet omnis illum repellendus. Quos, qui
            eius! Porro, asperiores vitae qui dignissimos natus dolore illum
            dolorum libero, in, ipsam debitis voluptatum! Optio voluptatibus
            minima nobis odio provident! Hic explicabo dicta placeat nemo
            delectus dolorum fugit laboriosam dignissimos culpa reiciendis
            pariatur architecto aspernatur alias, odit sed reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quidem sed expedita maiores non, distinctio dolore magnam dolor
            error quas veritatis in doloremque eum architecto suscipit iusto
            molestias possimus magni laborum repudiandae provident blanditiis
            fugit perferendis! Rerum quam amet perferendis adipisci! Non dolorem
            enim harum repudiandae necessitatibus laboriosam itaque blanditiis
            dicta esse sunt tempora quae, maxime commodi pariatur at eos.
            Doloremque cumque illo commodi, nostrum nam non in facere suscipit
            vero aspernatur velit aut eveniet omnis illum repellendus. Quos, qui
            eius! Porro, asperiores vitae qui dignissimos natus dolore illum
            dolorum libero, in, ipsam debitis voluptatum! Optio voluptatibus
            minima nobis odio provident! Hic explicabo dicta placeat nemo
            delectus dolorum fugit laboriosam dignissimos culpa reiciendis
            pariatur architecto aspernatur alias, odit sed reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quidem sed expedita maiores non, distinctio dolore magnam dolor
            error quas veritatis in doloremque eum architecto suscipit iusto
            molestias possimus magni laborum repudiandae provident blanditiis
            fugit perferendis! Rerum quam amet perferendis adipisci! Non dolorem
            enim harum repudiandae necessitatibus laboriosam itaque blanditiis
            dicta esse sunt tempora quae, maxime commodi pariatur at eos.
            Doloremque cumque illo commodi, nostrum nam non in facere suscipit
            vero aspernatur velit aut eveniet omnis illum repellendus. Quos, qui
            eius! Porro, asperiores vitae qui dignissimos natus dolore illum
            dolorum libero, in, ipsam debitis voluptatum! Optio voluptatibus
            minima nobis odio provident! Hic explicabo dicta placeat nemo
            delectus dolorum fugit laboriosam dignissimos culpa reiciendis
            pariatur architecto aspernatur alias, odit sed reprehenderit!
          </p>
        </div>
        {/* menu */}
        <aside className="px-4 h-max sticky top-6">
          <h3 className="mb-4 text-sm font-medium">Author</h3>
          <div className='flex flex-col gap-4'>
            <div className="mb-4 flex items-center gap-8">
              <IKImage
                className="rounded-full w-12 he-12 object-cover"
                src="/userImg.jpeg"
                width="48"
                height="48"
              />
              <Link to="/" className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem odit modi ab enim inventore rerum pariatur.
              Perferendis consectetur beatae, voluptates, ullam illum eveniet,
              laborum aperiam sunt obcaecati earum dolore quae.
            </p>
            <ul className="flex gap-4">
              <li>
                <Link>
                  <IKImage
                    className="rounded-full w-12 he-12 object-cover"
                    src="/facebook.svg"
                    width="48"
                    height="48"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <IKImage
                    className="rounded-full w-12 he-12 object-cover"
                    src="/instagram.svg"
                    width="48"
                    height="48"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <PostMenuActions />
          <h4 className="mt-8 mb-4 text-sm font-medium">Categories</h4>
          <div className="flex flex-col gap-2 text-sm mb-4">
            <Link className="underline">All</Link>
            <Link to="/" className="underline">
              Web design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
            <Link to="/" className="underline">
              Search Engine
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
          </div>
          <h4 className="mt-8 mb-4 text-sm font-medium">Search</h4>
          <Search />
        </aside>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
