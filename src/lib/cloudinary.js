/**
 * Builds an optimized Cloudinary delivery URL.
 *
 * Injects `f_auto,q_auto` (modern formats + smart compression) and an
 * optional width so the browser never downloads a full-size original.
 * Non-Cloudinary URLs are returned untouched.
 */
export function cld(url, { width } = {}) {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  const transforms = ["f_auto", "q_auto", width && `w_${width}`, "c_limit"]
    .filter(Boolean)
    .join(",");
  return url.trim().replace("/image/upload/", `/image/upload/${transforms}/`);
}
