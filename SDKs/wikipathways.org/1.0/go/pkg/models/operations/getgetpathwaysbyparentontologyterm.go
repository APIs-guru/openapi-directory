package operations

type GetGetPathwaysByParentOntologyTermFormatEnum string

const (
	GetGetPathwaysByParentOntologyTermFormatEnumJSON GetGetPathwaysByParentOntologyTermFormatEnum = "json"
	GetGetPathwaysByParentOntologyTermFormatEnumXML  GetGetPathwaysByParentOntologyTermFormatEnum = "xml"
	GetGetPathwaysByParentOntologyTermFormatEnumHTML GetGetPathwaysByParentOntologyTermFormatEnum = "html"
	GetGetPathwaysByParentOntologyTermFormatEnumDump GetGetPathwaysByParentOntologyTermFormatEnum = "dump"
	GetGetPathwaysByParentOntologyTermFormatEnumJpg  GetGetPathwaysByParentOntologyTermFormatEnum = "jpg"
	GetGetPathwaysByParentOntologyTermFormatEnumPdf  GetGetPathwaysByParentOntologyTermFormatEnum = "pdf"
)

type GetGetPathwaysByParentOntologyTermQueryParams struct {
	Format *GetGetPathwaysByParentOntologyTermFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Term   string                                        `queryParam:"style=form,explode=true,name=term"`
}

type GetGetPathwaysByParentOntologyTermRequest struct {
	QueryParams GetGetPathwaysByParentOntologyTermQueryParams
}

type GetGetPathwaysByParentOntologyTermResponse struct {
	ContentType string
	StatusCode  int64
}
