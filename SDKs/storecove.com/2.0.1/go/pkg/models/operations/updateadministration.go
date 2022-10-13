package operations

type UpdateAdministrationPathParams struct {
	ID            int64 `pathParam:"style=simple,explode=false,name=id"`
	LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
}

type UpdateAdministrationRequest struct {
	PathParams UpdateAdministrationPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateAdministrationResponse struct {
	Administration *interface{}
	ContentType    string
	StatusCode     int64
}
