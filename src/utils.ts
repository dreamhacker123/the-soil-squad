

export const getImageId = (link:string|undefined):string|undefined=>{
    return link?"https://drive.google.com/thumbnail?id="+link.split('/')[5]:undefined;
}