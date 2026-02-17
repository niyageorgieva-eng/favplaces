function GalleryImg({ type, img, video, alt, className }) {
  return (
    <figure className={className}>
      {type === "video" ? (
        <iframe
          src={video}
          className="galleryimg"
          loading="lazy"
          allowFullScreen
          title="Gallery video"
        />
      ) : (
        <a href={img} target="_blank" rel="noreferrer">
          <img src={img} alt={alt} className="galleryimg" loading="lazy" decoding="async" />
        </a>
      )}
    </figure>
  );
}

export default GalleryImg;

 
 