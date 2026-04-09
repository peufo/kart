for file in static/logo-*.jpg ; do
    magick $file -gravity center -crop 750x1100+0+0 -fuzz 10% -transparent white ${file/.jpg/.webp}
done ;