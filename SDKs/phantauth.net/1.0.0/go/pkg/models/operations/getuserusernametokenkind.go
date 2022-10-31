package operations

type GetUserUsernameTokenKindKindEnum string

const (
	GetUserUsernameTokenKindKindEnumAccess        GetUserUsernameTokenKindKindEnum = "'access'"
	GetUserUsernameTokenKindKindEnumRefresh       GetUserUsernameTokenKindKindEnum = "'refresh'"
	GetUserUsernameTokenKindKindEnumAuthorization GetUserUsernameTokenKindKindEnum = "'authorization'"
	GetUserUsernameTokenKindKindEnumID            GetUserUsernameTokenKindKindEnum = "'id'"
	GetUserUsernameTokenKindKindEnumSelfie        GetUserUsernameTokenKindKindEnum = "'selfie'"
	GetUserUsernameTokenKindKindEnumPlain         GetUserUsernameTokenKindKindEnum = "'plain'"
)

type GetUserUsernameTokenKindPathParams struct {
	Kind     GetUserUsernameTokenKindKindEnum `pathParam:"style=simple,explode=false,name=kind"`
	Username string                           `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserUsernameTokenKindQueryParams struct {
	Scope *string `queryParam:"style=form,explode=true,name=scope"`
}

type GetUserUsernameTokenKindRequest struct {
	PathParams  GetUserUsernameTokenKindPathParams
	QueryParams GetUserUsernameTokenKindQueryParams
}

type GetUserUsernameTokenKindResponse struct {
	ContentType string
	StatusCode  int64
}
