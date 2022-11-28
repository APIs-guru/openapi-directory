package shared

type ConnectionExceptionProblemConnectionIssueEnum string

const (
	ConnectionExceptionProblemConnectionIssueEnumTooManyConnections       ConnectionExceptionProblemConnectionIssueEnum = "TooManyConnections"
	ConnectionExceptionProblemConnectionIssueEnumProvisioningSubscription ConnectionExceptionProblemConnectionIssueEnum = "ProvisioningSubscription"
)

// ConnectionExceptionProblem
// A problem that indicates something is wrong with the connection
type ConnectionExceptionProblem struct {
	ConnectionIssue *ConnectionExceptionProblemConnectionIssueEnum `json:"connection_issue,omitempty"`
	Detail          string                                         `json:"detail"`
	Title           string                                         `json:"title"`
	Type            string                                         `json:"type"`
}
