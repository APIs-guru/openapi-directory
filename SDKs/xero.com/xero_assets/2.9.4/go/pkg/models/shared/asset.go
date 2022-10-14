package shared

import (
	"time"
)

type Asset struct {
	AccountingBookValue     *float64         `json:"accountingBookValue,omitempty"`
	AssetID                 *string          `json:"assetId,omitempty"`
	AssetName               string           `json:"assetName"`
	AssetNumber             *string          `json:"assetNumber,omitempty"`
	AssetStatus             *AssetStatusEnum `json:"assetStatus,omitempty"`
	AssetTypeID             *string          `json:"assetTypeId,omitempty"`
	BookDepreciationDetail  *interface{}     `json:"bookDepreciationDetail,omitempty"`
	BookDepreciationSetting *interface{}     `json:"bookDepreciationSetting,omitempty"`
	CanRollback             *bool            `json:"canRollback,omitempty"`
	DisposalDate            *time.Time       `json:"disposalDate,omitempty"`
	DisposalPrice           *float64         `json:"disposalPrice,omitempty"`
	IsDeleteEnabledForDate  *bool            `json:"isDeleteEnabledForDate,omitempty"`
	PurchaseDate            *time.Time       `json:"purchaseDate,omitempty"`
	PurchasePrice           *float64         `json:"purchasePrice,omitempty"`
	SerialNumber            *string          `json:"serialNumber,omitempty"`
	WarrantyExpiryDate      *string          `json:"warrantyExpiryDate,omitempty"`
}
