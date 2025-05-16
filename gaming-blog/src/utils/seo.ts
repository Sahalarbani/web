import { NextSeo } from 'next-seo';

export const generateSeo = ({
  title,
  description,
  url,
  image,
  slug,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  slug?: string;
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: image || '/default-image.png',
            alt: title,
          },
        ],
        site_name: 'Gaming Blog',
      }}
      twitter={{
        handle: '@yourtwitterhandle',
        site: '@yourtwitterhandle',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};