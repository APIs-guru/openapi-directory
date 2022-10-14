package shared

type ClientForbiddenProblemReasonEnum string

const (
	ClientForbiddenProblemReasonEnumOfficialClientForbidden ClientForbiddenProblemReasonEnum = "official-client-forbidden"
	ClientForbiddenProblemReasonEnumClientNotEnrolled       ClientForbiddenProblemReasonEnum = "client-not-enrolled"
)

type ClientForbiddenProblem struct {
	Detail          string                            `json:"detail"`
	Reason          *ClientForbiddenProblemReasonEnum `json:"reason,omitempty"`
	RegistrationURL *string                           `json:"registration_url,omitempty"`
	Title           string                            `json:"title"`
	Type            string                            `json:"type"`
}
