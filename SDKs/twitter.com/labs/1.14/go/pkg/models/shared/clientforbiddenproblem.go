package shared

type ClientForbiddenProblemReasonEnum string

const (
	ClientForbiddenProblemReasonEnumOfficialClientForbidden ClientForbiddenProblemReasonEnum = "official-client-forbidden"
	ClientForbiddenProblemReasonEnumClientNotEnrolled       ClientForbiddenProblemReasonEnum = "client-not-enrolled"
)

// ClientForbiddenProblem
// A problem that indicates your client is forbidden from making this request.
type ClientForbiddenProblem struct {
	Detail          string                            `json:"detail"`
	Reason          *ClientForbiddenProblemReasonEnum `json:"reason,omitempty"`
	RegistrationURL *string                           `json:"registration_url,omitempty"`
	Title           string                            `json:"title"`
	Type            string                            `json:"type"`
}
