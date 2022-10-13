package shared

type AssetResponseAttributesStatusEnum string

const (
	AssetResponseAttributesStatusEnumImporting AssetResponseAttributesStatusEnum = "importing"
	AssetResponseAttributesStatusEnumReady     AssetResponseAttributesStatusEnum = "ready"
	AssetResponseAttributesStatusEnumFailed    AssetResponseAttributesStatusEnum = "failed"
	AssetResponseAttributesStatusEnumDeleted   AssetResponseAttributesStatusEnum = "deleted"
)

type AssetResponseAttributes struct {
	Created  *string                            `json:"created"`
	Filename *string                            `json:"filename"`
	ID       *string                            `json:"id"`
	Owner    *string                            `json:"owner"`
	Region   *string                            `json:"region"`
	RenderID *string                            `json:"renderId"`
	Status   *AssetResponseAttributesStatusEnum `json:"status"`
	Updated  *string                            `json:"updated"`
	URL      *string                            `json:"url"`
}
