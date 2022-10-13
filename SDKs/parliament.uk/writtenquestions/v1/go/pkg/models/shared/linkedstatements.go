package shared

import (
	"time"
)

type LinkedStatements struct {
	LinkDate          *time.Time                 `json:"linkDate"`
	LinkType          *StatementLinkTypeEnumEnum `json:"linkType"`
	LinkedStatementID *int32                     `json:"linkedStatementId"`
}
