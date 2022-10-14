package shared

import (
	"time"
)

type DpsJobInstructionDpsJobInstructionEmployerEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type DpsJobInstructionDpsJobInstructionMessageTypesType struct {
	Type []interface{} `json:"Type,omitempty"`
}

type DpsJobInstructionDpsJobInstructionMessagesToProcessMessage struct {
	Message []interface{} `json:"Message,omitempty"`
}

type DpsJobInstructionDpsJobInstructionDpsJobInstruction struct {
	Apply             *bool                                                       `json:"Apply,omitempty"`
	Employer          *DpsJobInstructionDpsJobInstructionEmployerEmployer         `json:"Employer,omitempty"`
	FromDate          *time.Time                                                  `json:"FromDate,omitempty"`
	HoldingDate       *time.Time                                                  `json:"HoldingDate,omitempty"`
	MessageTypes      *DpsJobInstructionDpsJobInstructionMessageTypesType         `json:"MessageTypes,omitempty"`
	MessagesToProcess *DpsJobInstructionDpsJobInstructionMessagesToProcessMessage `json:"MessagesToProcess,omitempty"`
	Retrieve          *bool                                                       `json:"Retrieve,omitempty"`
}

type DpsJobInstruction struct {
	DpsJobInstruction *DpsJobInstructionDpsJobInstructionDpsJobInstruction `json:"DpsJobInstruction,omitempty"`
}
