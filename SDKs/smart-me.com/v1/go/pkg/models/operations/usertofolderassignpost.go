package operations

type UserToFolderAssignPostQueryParams struct {
	OldFolder string `queryParam:"style=form,explode=true,name=oldFolder"`
	Source    string `queryParam:"style=form,explode=true,name=source"`
	Target    string `queryParam:"style=form,explode=true,name=target"`
}

type UserToFolderAssignPostRequest struct {
	QueryParams UserToFolderAssignPostQueryParams
}

type UserToFolderAssignPostResponse struct {
	ContentType string
	StatusCode  int64
}
