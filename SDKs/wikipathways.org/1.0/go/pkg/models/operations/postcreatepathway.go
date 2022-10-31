package operations




type PostCreatePathwayFormatEnum string

const (
    PostCreatePathwayFormatEnumJSON PostCreatePathwayFormatEnum = "json"
PostCreatePathwayFormatEnumXML PostCreatePathwayFormatEnum = "xml"
PostCreatePathwayFormatEnumHTML PostCreatePathwayFormatEnum = "html"
PostCreatePathwayFormatEnumDump PostCreatePathwayFormatEnum = "dump"
PostCreatePathwayFormatEnumJpg PostCreatePathwayFormatEnum = "jpg"
PostCreatePathwayFormatEnumPdf PostCreatePathwayFormatEnum = "pdf"
)


type PostCreatePathwayQueryParams struct {
    Auth string `queryParam:"style=form,explode=true,name=auth"`
    Format *PostCreatePathwayFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Gpml string `queryParam:"style=form,explode=true,name=gpml"`
    Username string `queryParam:"style=form,explode=true,name=username"`
    
}

type PostCreatePathwayRequest struct {
    QueryParams PostCreatePathwayQueryParams 
    
}

type PostCreatePathwayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

