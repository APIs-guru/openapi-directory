package operations

type UserToFolderAssignDeleteQueryParams struct {
	Source string `queryParam:"style=form,explode=true,name=source"`
	Target string `queryParam:"style=form,explode=true,name=target"`
}

type UserToFolderAssignDeleteRequest struct {
	QueryParams UserToFolderAssignDeleteQueryParams
}

type UserToFolderAssignDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
