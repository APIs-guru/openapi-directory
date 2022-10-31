package shared

type DependentHostedNumberOrderEnumStatusEnum string

const (
	DependentHostedNumberOrderEnumStatusEnumReceived            DependentHostedNumberOrderEnumStatusEnum = "received"
	DependentHostedNumberOrderEnumStatusEnumPendingVerification DependentHostedNumberOrderEnumStatusEnum = "pending-verification"
	DependentHostedNumberOrderEnumStatusEnumVerified            DependentHostedNumberOrderEnumStatusEnum = "verified"
	DependentHostedNumberOrderEnumStatusEnumPendingLoa          DependentHostedNumberOrderEnumStatusEnum = "pending-loa"
	DependentHostedNumberOrderEnumStatusEnumCarrierProcessing   DependentHostedNumberOrderEnumStatusEnum = "carrier-processing"
	DependentHostedNumberOrderEnumStatusEnumTesting             DependentHostedNumberOrderEnumStatusEnum = "testing"
	DependentHostedNumberOrderEnumStatusEnumCompleted           DependentHostedNumberOrderEnumStatusEnum = "completed"
	DependentHostedNumberOrderEnumStatusEnumFailed              DependentHostedNumberOrderEnumStatusEnum = "failed"
	DependentHostedNumberOrderEnumStatusEnumActionRequired      DependentHostedNumberOrderEnumStatusEnum = "action-required"
)
