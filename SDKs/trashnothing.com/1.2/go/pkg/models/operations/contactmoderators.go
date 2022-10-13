package operations

type ContactModeratorsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type ContactModeratorsRequestBody struct {
	Message string `multipartForm:"name=message"`
	Subject string `multipartForm:"name=subject"`
}

type ContactModeratorsRequest struct {
	PathParams ContactModeratorsPathParams
	Request    ContactModeratorsRequestBody `request:"mediaType=multipart/form-data"`
}

type ContactModeratorsResponse struct {
	ContentType string
	StatusCode  int64
}
