import GalleryCard from "./GalleryCard";
const GalleryItem = ({item}) => {
    console.log("GalleryItem", item);

    // const tags = [] ;
    // for(let i=0 ; i <item.length ; i++) {
    //     tags.push()
    // }

    const tags = item.map((i, idx) => 
        <GalleryCard key={i.galContentId} 
                    imgsrc={i.galWebImageUrl.replace('http:','https:')} 
                    title={i.galTitle} 
                    content={i.galPhotographyLocation} 
                    sptag={i.galSearchKeyword.split(',')} />
    ) ;


  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-38">
      {tags}
    </div>
  )
}

export default GalleryItem
