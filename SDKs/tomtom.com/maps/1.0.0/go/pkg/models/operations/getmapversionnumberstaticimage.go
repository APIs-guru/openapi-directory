package operations



type GetMapVersionNumberStaticimagePathParams struct {
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}


type GetMapVersionNumberStaticimageFormatEnum string

const (
    GetMapVersionNumberStaticimageFormatEnumPng GetMapVersionNumberStaticimageFormatEnum = "png"
GetMapVersionNumberStaticimageFormatEnumJpg GetMapVersionNumberStaticimageFormatEnum = "jpg"
GetMapVersionNumberStaticimageFormatEnumJpeg GetMapVersionNumberStaticimageFormatEnum = "jpeg"
)



type GetMapVersionNumberStaticimageLayerEnum string

const (
    GetMapVersionNumberStaticimageLayerEnumBasic GetMapVersionNumberStaticimageLayerEnum = "basic"
GetMapVersionNumberStaticimageLayerEnumHybrid GetMapVersionNumberStaticimageLayerEnum = "hybrid"
GetMapVersionNumberStaticimageLayerEnumLabels GetMapVersionNumberStaticimageLayerEnum = "labels"
)



type GetMapVersionNumberStaticimageStyleEnum string

const (
    GetMapVersionNumberStaticimageStyleEnumMain GetMapVersionNumberStaticimageStyleEnum = "main"
GetMapVersionNumberStaticimageStyleEnumNight GetMapVersionNumberStaticimageStyleEnum = "night"
)



type GetMapVersionNumberStaticimageViewEnum string

const (
    GetMapVersionNumberStaticimageViewEnumUnified GetMapVersionNumberStaticimageViewEnum = "Unified"
GetMapVersionNumberStaticimageViewEnumIn GetMapVersionNumberStaticimageViewEnum = "IN"
)


type GetMapVersionNumberStaticimageQueryParams struct {
    Bbox *string `queryParam:"style=form,explode=true,name=bbox"`
    Center *string `queryParam:"style=form,explode=true,name=center"`
    Format *GetMapVersionNumberStaticimageFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Height *int64 `queryParam:"style=form,explode=true,name=height"`
    Layer *GetMapVersionNumberStaticimageLayerEnum `queryParam:"style=form,explode=true,name=layer"`
    Style *GetMapVersionNumberStaticimageStyleEnum `queryParam:"style=form,explode=true,name=style"`
    View *GetMapVersionNumberStaticimageViewEnum `queryParam:"style=form,explode=true,name=view"`
    Width *int64 `queryParam:"style=form,explode=true,name=width"`
    Zoom *int64 `queryParam:"style=form,explode=true,name=zoom"`
    
}

type GetMapVersionNumberStaticimageRequest struct {
    PathParams GetMapVersionNumberStaticimagePathParams 
    QueryParams GetMapVersionNumberStaticimageQueryParams 
    
}

type GetMapVersionNumberStaticimageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

