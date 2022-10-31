package shared

import (
"time")

type LinkedStatements struct {
    LinkDate *time.Time `json:"linkDate,omitempty"`
    LinkType *StatementLinkTypeEnumEnum `json:"linkType,omitempty"`
    LinkedStatementID *int32 `json:"linkedStatementId,omitempty"`
    
}

