package operations

type GetBasicPatientDetailsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetBasicPatientDetailsRequest struct {
	PathParams GetBasicPatientDetailsPathParams
}

type GetBasicPatientDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
