package shared

import (
	"time"
)

type ThirdPartyJobInstructionThirdPartyJobInstructionEmployerEmployer struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type ThirdPartyJobInstructionThirdPartyJobInstructionThirdPartyJobInstruction struct {
	ClientIDUniqueKey     *string                                                           `json:"ClientIdUniqueKey"`
	ClientSecretUniqueKey *string                                                           `json:"ClientSecretUniqueKey"`
	Employer              *ThirdPartyJobInstructionThirdPartyJobInstructionEmployerEmployer `json:"Employer"`
	HoldingDate           *time.Time                                                        `json:"HoldingDate"`
	InstructionTypeName   *string                                                           `json:"InstructionTypeName"`
	PayScheduleUniqueKey  *string                                                           `json:"PayScheduleUniqueKey"`
	PaymentDate           *time.Time                                                        `json:"PaymentDate"`
	RemoteEndpoint        *string                                                           `json:"RemoteEndpoint"`
}

type ThirdPartyJobInstruction struct {
	ThirdPartyJobInstruction *ThirdPartyJobInstructionThirdPartyJobInstructionThirdPartyJobInstruction `json:"ThirdPartyJobInstruction"`
}
