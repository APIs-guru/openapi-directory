package shared

import (
	"time"
)

type VirtualTariffsOfFolder struct {
	Date           *time.Time      `json:"Date"`
	FolderID       *string         `json:"FolderId"`
	Name           *string         `json:"Name"`
	VirtualTariffs []VirtualTariff `json:"VirtualTariffs"`
}
