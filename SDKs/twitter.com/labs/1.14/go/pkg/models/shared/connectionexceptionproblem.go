package shared

type ConnectionExceptionProblemConnectionIssueEnum string

const (
	ConnectionExceptionProblemConnectionIssueEnumTooManyConnections       ConnectionExceptionProblemConnectionIssueEnum = "TooManyConnections"
	ConnectionExceptionProblemConnectionIssueEnumProvisioningSubscription ConnectionExceptionProblemConnectionIssueEnum = "ProvisioningSubscription"
)

type ConnectionExceptionProblem struct {
	ConnectionIssue *ConnectionExceptionProblemConnectionIssueEnum `json:"connection_issue"`
	Detail          string                                         `json:"detail"`
	Title           string                                         `json:"title"`
	Type            string                                         `json:"type"`
}
