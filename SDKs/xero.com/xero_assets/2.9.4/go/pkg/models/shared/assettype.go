package shared

type AssetType struct {
	AccumulatedDepreciationAccountID *string     `json:"accumulatedDepreciationAccountId,omitempty"`
	AssetTypeID                      *string     `json:"assetTypeId,omitempty"`
	AssetTypeName                    string      `json:"assetTypeName"`
	BookDepreciationSetting          interface{} `json:"bookDepreciationSetting"`
	DepreciationExpenseAccountID     *string     `json:"depreciationExpenseAccountId,omitempty"`
	FixedAssetAccountID              *string     `json:"fixedAssetAccountId,omitempty"`
	Locks                            *int64      `json:"locks,omitempty"`
}
