import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import BigImageLayout from './BigImageLayout';
import { WHATSAPP, WHATSAPP_LINK, EMAIL_CAPTION } from '../utils/constants';

export default function JoinUs({ fields }) {
  const { pathname } = useRouter();
  const isVolunteers = pathname.toLowerCase().indexOf('/voluntarios') >= 0;
  const {
    title,
    description,
    joinUsEmail,
    cta: {
      fields: {
        label,
        link,
      },
    },
    sectionImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
  } = fields;

  const newProp = isVolunteers ? {
    cta:
    <Link passHref href={WHATSAPP_LINK}>
      <a href="/" className="big-image-layout__button icon-cta" target="_blank" rel="noreferrer">
        <img
          role="presentation"
          aria-hidden="true"
          src="/icons/icon-whatsapp.svg"
          alt=""
        />
        {WHATSAPP}
      </a>
    </Link>,
  } : {};

  const emailSection = (joinUsEmail && isVolunteers) && (
    <div className="join-us-email">
      <p>{EMAIL_CAPTION}</p>
      <div className="join-us-email__content">
        <img
          role="presentation"
          aria-hidden="true"
          src="/icons/icon-mail.svg"
          alt=""
        />
        <p>{joinUsEmail}</p>
      </div>
    </div>
  );

  return (
    <article className="join-us">
      <BigImageLayout
        variation={['blue-background']}
        data={{
          title,
          description,
          label,
          link,
          url,
          imgTitle,
        }}
        {...newProp}
        email={emailSection}
      />
    </article>
  );
}
