import { useEffect, useState } from 'react';

// Rasm topilmasa yoki yuklanmasa, buzilgan belgi o'rniga placeholder ko'rsatadi.
export default function SafeImage({ src, alt, placeholder, className = '' }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  if (failed) {
    return (
      <div className={`image-placeholder ${className}`} role="img" aria-label={alt}>
        <span>{placeholder}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
