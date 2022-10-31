package operations

type GetAPIReferenceDepartmentsIDLogoPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIReferenceDepartmentsIDLogoRequest struct {
	PathParams GetAPIReferenceDepartmentsIDLogoPathParams
}

type GetAPIReferenceDepartmentsIDLogoResponse struct {
	ContentType string
	StatusCode  int64
}
