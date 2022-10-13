package shared

import (
	"time"
)

type DpsJobInstructionDpsJobInstructionEmployerEmployer struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type DpsJobInstructionDpsJobInstructionMessageTypesType struct {
	Type []interface{} `json:"Type"`
}

type DpsJobInstructionDpsJobInstructionMessagesToProcessMessage struct {
	Message []interface{} `json:"Message"`
}

type DpsJobInstructionDpsJobInstructionDpsJobInstruction struct {
	Apply             *bool                                                       `json:"Apply"`
	Employer          *DpsJobInstructionDpsJobInstructionEmployerEmployer         `json:"Employer"`
	FromDate          *time.Time                                                  `json:"FromDate"`
	HoldingDate       *time.Time                                                  `json:"HoldingDate"`
	MessageTypes      *DpsJobInstructionDpsJobInstructionMessageTypesType         `json:"MessageTypes"`
	MessagesToProcess *DpsJobInstructionDpsJobInstructionMessagesToProcessMessage `json:"MessagesToProcess"`
	Retrieve          *bool                                                       `json:"Retrieve"`
}

type DpsJobInstruction struct {
	DpsJobInstruction *DpsJobInstructionDpsJobInstructionDpsJobInstruction `json:"DpsJobInstruction"`
}
