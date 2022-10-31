package operations

type GetClientClientIDTokenKindKindEnum string

const (
	GetClientClientIDTokenKindKindEnumRegistration GetClientClientIDTokenKindKindEnum = "'registration'"
	GetClientClientIDTokenKindKindEnumSelfie       GetClientClientIDTokenKindKindEnum = "'selfie'"
	GetClientClientIDTokenKindKindEnumPlain        GetClientClientIDTokenKindKindEnum = "'plain'"
)

type GetClientClientIDTokenKindPathParams struct {
	ClientID string                             `pathParam:"style=simple,explode=false,name=client_id"`
	Kind     GetClientClientIDTokenKindKindEnum `pathParam:"style=simple,explode=false,name=kind"`
}

type GetClientClientIDTokenKindRequest struct {
	PathParams GetClientClientIDTokenKindPathParams
}

type GetClientClientIDTokenKindResponse struct {
	ContentType string
	StatusCode  int64
}
