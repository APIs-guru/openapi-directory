package shared

type HTMLAssetPositionEnum string

const (
	HTMLAssetPositionEnumTop         HTMLAssetPositionEnum = "top"
	HTMLAssetPositionEnumTopRight    HTMLAssetPositionEnum = "topRight"
	HTMLAssetPositionEnumRight       HTMLAssetPositionEnum = "right"
	HTMLAssetPositionEnumBottomRight HTMLAssetPositionEnum = "bottomRight"
	HTMLAssetPositionEnumBottom      HTMLAssetPositionEnum = "bottom"
	HTMLAssetPositionEnumBottomLeft  HTMLAssetPositionEnum = "bottomLeft"
	HTMLAssetPositionEnumLeft        HTMLAssetPositionEnum = "left"
	HTMLAssetPositionEnumTopLeft     HTMLAssetPositionEnum = "topLeft"
	HTMLAssetPositionEnumCenter      HTMLAssetPositionEnum = "center"
)

type HTMLAsset struct {
	Background *string                `json:"background"`
	CSS        *string                `json:"css"`
	Height     *int64                 `json:"height"`
	HTML       string                 `json:"html"`
	Position   *HTMLAssetPositionEnum `json:"position"`
	Type       string                 `json:"type"`
	Width      *int64                 `json:"width"`
}
