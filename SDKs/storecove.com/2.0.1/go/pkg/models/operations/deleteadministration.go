package operations

type DeleteAdministrationPathParams struct {
	ID            int64 `pathParam:"style=simple,explode=false,name=id"`
	LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
}

type DeleteAdministrationRequest struct {
	PathParams DeleteAdministrationPathParams
}

type DeleteAdministrationResponse struct {
	ContentType string
	StatusCode  int64
}
