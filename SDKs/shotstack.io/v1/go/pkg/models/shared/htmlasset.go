package shared




type HTMLAssetPositionEnum string

const (
    HTMLAssetPositionEnumTop HTMLAssetPositionEnum = "top"
HTMLAssetPositionEnumTopRight HTMLAssetPositionEnum = "topRight"
HTMLAssetPositionEnumRight HTMLAssetPositionEnum = "right"
HTMLAssetPositionEnumBottomRight HTMLAssetPositionEnum = "bottomRight"
HTMLAssetPositionEnumBottom HTMLAssetPositionEnum = "bottom"
HTMLAssetPositionEnumBottomLeft HTMLAssetPositionEnum = "bottomLeft"
HTMLAssetPositionEnumLeft HTMLAssetPositionEnum = "left"
HTMLAssetPositionEnumTopLeft HTMLAssetPositionEnum = "topLeft"
HTMLAssetPositionEnumCenter HTMLAssetPositionEnum = "center"
)


type HTMLAsset struct {
    Background *string `json:"background,omitempty"`
    CSS *string `json:"css,omitempty"`
    Height *int64 `json:"height,omitempty"`
    HTML string `json:"html"`
    Position *HTMLAssetPositionEnum `json:"position,omitempty"`
    Type string `json:"type"`
    Width *int64 `json:"width,omitempty"`
    
}

