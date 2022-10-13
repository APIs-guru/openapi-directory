package operations

import (
	"openapi/pkg/models/shared"
)

type StoryPermissionTypesGetResponse struct {
	ContentType     string
	StatusCode      int64
	PermissionTypes []shared.PermissionType
	ProblemDetail   *interface{}
}
