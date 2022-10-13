package shared

type AssetType struct {
	AccumulatedDepreciationAccountID *string     `json:"accumulatedDepreciationAccountId"`
	AssetTypeID                      *string     `json:"assetTypeId"`
	AssetTypeName                    string      `json:"assetTypeName"`
	BookDepreciationSetting          interface{} `json:"bookDepreciationSetting"`
	DepreciationExpenseAccountID     *string     `json:"depreciationExpenseAccountId"`
	FixedAssetAccountID              *string     `json:"fixedAssetAccountId"`
	Locks                            *int64      `json:"locks"`
}
