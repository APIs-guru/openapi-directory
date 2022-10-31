package operations

type GetAdministrationPathParams struct {
	ID            int64 `pathParam:"style=simple,explode=false,name=id"`
	LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
}

type GetAdministrationRequest struct {
	PathParams GetAdministrationPathParams
}

type GetAdministrationResponse struct {
	Administration *interface{}
	ContentType    string
	StatusCode     int64
}
