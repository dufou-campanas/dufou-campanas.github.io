MARCA=$2
DONDE=$1
printf "[\n"
for file in *$1/*.*; do 
    FNAME=$(basename $file)
    TITLE=${FNAME%.*}
    printf "  {\n    \"nombre\": \"$TITLE\",\n    \"imagen\": \"$file\",\n    \"url\": \"%s\"\n  },\n" "/articulo/article?brand=$MARCA&mod=$TITLE"
done
printf "]\n"
