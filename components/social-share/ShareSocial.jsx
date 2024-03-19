"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TumblrShareButton,
  TumblrIcon,
} from "next-share";

const MSG =
  "I am Emmanuel Yeboah, a fullstack developer with a passion for building beautiful and functional software. I have strong eye for innovative design and a keen understanding of techniques that make software more intuitive and user-friendly.";

const ShareSocial = () => {
  return (
    <div className="social-share">
      <FacebookShareButton
        url={"https://www.facebook.com/noelzappy/"}
        quote={MSG}
        hashtag={"#noelzappy"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton url={"https://www.pinterest.com/"} media={MSG}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton url={"https://twitter.com/noelzappy"} title={MSG}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={"https://www.linkedin.com/in/noelzappy/"}
        title="Emmanuel Yeboah | Fullstack Developer"
        summary={MSG}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TumblrShareButton url={"https://www.tumblr.com/"} title={MSG}>
        <TumblrIcon size={32} round />
      </TumblrShareButton>
    </div>
  );
};

export default ShareSocial;
