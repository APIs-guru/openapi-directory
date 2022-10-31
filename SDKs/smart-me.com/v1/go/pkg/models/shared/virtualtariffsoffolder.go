package shared

import (
	"time"
)

type VirtualTariffsOfFolder struct {
	Date           *time.Time      `json:"Date,omitempty"`
	FolderID       *string         `json:"FolderId,omitempty"`
	Name           *string         `json:"Name,omitempty"`
	VirtualTariffs []VirtualTariff `json:"VirtualTariffs,omitempty"`
}
