# Gallery photos

Drop photos into one folder per country, e.g.:

```
src/assets/gallery/
  new-zealand/
    hobbiton.jpg
    lake-taupo.jpg
  spain/
    malaga-alcazaba.jpg
```

- Folder name = country slug. Its display name (and optional description / photo
  captions) can be set in `src/data/gallery.ts`; otherwise it is derived from the slug.
- Supported formats: jpg, jpeg, png, webp, avif. Images are resized and converted at build time.
- Without an explicit caption, the file name becomes the caption (`lake-taupo.jpg` → "Lake taupo").
- Photos are sorted by file name; prefix with numbers (`01-...`) to control order.
