package operations

type FolderAssignPostQueryParams struct {
	Source string `queryParam:"style=form,explode=true,name=source"`
	Target string `queryParam:"style=form,explode=true,name=target"`
}

type FolderAssignPostRequest struct {
	QueryParams FolderAssignPostQueryParams
}

type FolderAssignPostResponse struct {
	ContentType string
	StatusCode  int64
}
