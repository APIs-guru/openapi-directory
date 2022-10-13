package shared

import (
	"time"
)

type Asset struct {
	AccountingBookValue     *float64         `json:"accountingBookValue"`
	AssetID                 *string          `json:"assetId"`
	AssetName               string           `json:"assetName"`
	AssetNumber             *string          `json:"assetNumber"`
	AssetStatus             *AssetStatusEnum `json:"assetStatus"`
	AssetTypeID             *string          `json:"assetTypeId"`
	BookDepreciationDetail  *interface{}     `json:"bookDepreciationDetail"`
	BookDepreciationSetting *interface{}     `json:"bookDepreciationSetting"`
	CanRollback             *bool            `json:"canRollback"`
	DisposalDate            *time.Time       `json:"disposalDate"`
	DisposalPrice           *float64         `json:"disposalPrice"`
	IsDeleteEnabledForDate  *bool            `json:"isDeleteEnabledForDate"`
	PurchaseDate            *time.Time       `json:"purchaseDate"`
	PurchasePrice           *float64         `json:"purchasePrice"`
	SerialNumber            *string          `json:"serialNumber"`
	WarrantyExpiryDate      *string          `json:"warrantyExpiryDate"`
}
