package operations

type FolderSettingsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FolderSettingsDeleteRequest struct {
	PathParams FolderSettingsDeletePathParams
}

type FolderSettingsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
