package shared

type OnboardedStatusEnum string

const (
	OnboardedStatusEnumCreated    OnboardedStatusEnum = "CREATED"
	OnboardedStatusEnumInvited    OnboardedStatusEnum = "INVITED"
	OnboardedStatusEnumRegistered OnboardedStatusEnum = "REGISTERED"
	OnboardedStatusEnumOnboarded  OnboardedStatusEnum = "ONBOARDED"
)
