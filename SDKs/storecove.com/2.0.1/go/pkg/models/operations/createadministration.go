package operations

type CreateAdministrationPathParams struct {
	LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
}

type CreateAdministrationRequest struct {
	PathParams CreateAdministrationPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type CreateAdministrationResponse struct {
	Administration *interface{}
	ContentType    string
	ErrorModels    []interface{}
	StatusCode     int64
}
