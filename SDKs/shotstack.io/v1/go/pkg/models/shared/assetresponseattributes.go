package shared

type AssetResponseAttributesStatusEnum string

const (
	AssetResponseAttributesStatusEnumImporting AssetResponseAttributesStatusEnum = "importing"
	AssetResponseAttributesStatusEnumReady     AssetResponseAttributesStatusEnum = "ready"
	AssetResponseAttributesStatusEnumFailed    AssetResponseAttributesStatusEnum = "failed"
	AssetResponseAttributesStatusEnumDeleted   AssetResponseAttributesStatusEnum = "deleted"
)

// AssetResponseAttributes
// The list of asset attributes and their values.
type AssetResponseAttributes struct {
	Created  *string                            `json:"created,omitempty"`
	Filename *string                            `json:"filename,omitempty"`
	ID       *string                            `json:"id,omitempty"`
	Owner    *string                            `json:"owner,omitempty"`
	Region   *string                            `json:"region,omitempty"`
	RenderID *string                            `json:"renderId,omitempty"`
	Status   *AssetResponseAttributesStatusEnum `json:"status,omitempty"`
	Updated  *string                            `json:"updated,omitempty"`
	URL      *string                            `json:"url,omitempty"`
}
