package shared

import (
	"time"
)

// VirtualTariffsOfFolder
// Container class for a Virtual Tariff
type VirtualTariffsOfFolder struct {
	Date           *time.Time      `json:"Date,omitempty"`
	FolderID       *string         `json:"FolderId,omitempty"`
	Name           *string         `json:"Name,omitempty"`
	VirtualTariffs []VirtualTariff `json:"VirtualTariffs,omitempty"`
}
