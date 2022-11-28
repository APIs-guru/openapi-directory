package shared

type OperationalDisconnectProblemDisconnectTypeEnum string

const (
	OperationalDisconnectProblemDisconnectTypeEnumOperationalDisconnect          OperationalDisconnectProblemDisconnectTypeEnum = "OperationalDisconnect"
	OperationalDisconnectProblemDisconnectTypeEnumUpstreamOperationalDisconnect  OperationalDisconnectProblemDisconnectTypeEnum = "UpstreamOperationalDisconnect"
	OperationalDisconnectProblemDisconnectTypeEnumForceDisconnect                OperationalDisconnectProblemDisconnectTypeEnum = "ForceDisconnect"
	OperationalDisconnectProblemDisconnectTypeEnumUpstreamUncleanDisconnect      OperationalDisconnectProblemDisconnectTypeEnum = "UpstreamUncleanDisconnect"
	OperationalDisconnectProblemDisconnectTypeEnumSlowReader                     OperationalDisconnectProblemDisconnectTypeEnum = "SlowReader"
	OperationalDisconnectProblemDisconnectTypeEnumInternalError                  OperationalDisconnectProblemDisconnectTypeEnum = "InternalError"
	OperationalDisconnectProblemDisconnectTypeEnumPackageUpgraded                OperationalDisconnectProblemDisconnectTypeEnum = "PackageUpgraded"
	OperationalDisconnectProblemDisconnectTypeEnumPackageDowngraded              OperationalDisconnectProblemDisconnectTypeEnum = "PackageDowngraded"
	OperationalDisconnectProblemDisconnectTypeEnumClientApplicationStateDegraded OperationalDisconnectProblemDisconnectTypeEnum = "ClientApplicationStateDegraded"
)

// OperationalDisconnectProblem
// You have been disconnected for operational reasons.
type OperationalDisconnectProblem struct {
	Detail         string                                          `json:"detail"`
	DisconnectType *OperationalDisconnectProblemDisconnectTypeEnum `json:"disconnect_type,omitempty"`
	Title          string                                          `json:"title"`
	Type           string                                          `json:"type"`
}
