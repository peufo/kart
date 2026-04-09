for file in src/lib/assets/*.jpeg ; do
    magick $file -gravity center -crop 800x853+0+0 ${file/.jpeg/-croped.jpeg}
done ;