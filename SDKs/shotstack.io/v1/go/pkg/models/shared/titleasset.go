package shared

type TitleAssetPositionEnum string

const (
	TitleAssetPositionEnumTop         TitleAssetPositionEnum = "top"
	TitleAssetPositionEnumTopRight    TitleAssetPositionEnum = "topRight"
	TitleAssetPositionEnumRight       TitleAssetPositionEnum = "right"
	TitleAssetPositionEnumBottomRight TitleAssetPositionEnum = "bottomRight"
	TitleAssetPositionEnumBottom      TitleAssetPositionEnum = "bottom"
	TitleAssetPositionEnumBottomLeft  TitleAssetPositionEnum = "bottomLeft"
	TitleAssetPositionEnumLeft        TitleAssetPositionEnum = "left"
	TitleAssetPositionEnumTopLeft     TitleAssetPositionEnum = "topLeft"
	TitleAssetPositionEnumCenter      TitleAssetPositionEnum = "center"
)

type TitleAssetSizeEnum string

const (
	TitleAssetSizeEnumXxSmall TitleAssetSizeEnum = "xx-small"
	TitleAssetSizeEnumXSmall  TitleAssetSizeEnum = "x-small"
	TitleAssetSizeEnumSmall   TitleAssetSizeEnum = "small"
	TitleAssetSizeEnumMedium  TitleAssetSizeEnum = "medium"
	TitleAssetSizeEnumLarge   TitleAssetSizeEnum = "large"
	TitleAssetSizeEnumXLarge  TitleAssetSizeEnum = "x-large"
	TitleAssetSizeEnumXxLarge TitleAssetSizeEnum = "xx-large"
)

type TitleAssetStyleEnum string

const (
	TitleAssetStyleEnumMinimal     TitleAssetStyleEnum = "minimal"
	TitleAssetStyleEnumBlockbuster TitleAssetStyleEnum = "blockbuster"
	TitleAssetStyleEnumVogue       TitleAssetStyleEnum = "vogue"
	TitleAssetStyleEnumSketchy     TitleAssetStyleEnum = "sketchy"
	TitleAssetStyleEnumSkinny      TitleAssetStyleEnum = "skinny"
	TitleAssetStyleEnumChunk       TitleAssetStyleEnum = "chunk"
	TitleAssetStyleEnumChunkLight  TitleAssetStyleEnum = "chunkLight"
	TitleAssetStyleEnumMarker      TitleAssetStyleEnum = "marker"
	TitleAssetStyleEnumFuture      TitleAssetStyleEnum = "future"
	TitleAssetStyleEnumSubtitle    TitleAssetStyleEnum = "subtitle"
)

// TitleAsset
// The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
type TitleAsset struct {
	Background *string                 `json:"background,omitempty"`
	Color      *string                 `json:"color,omitempty"`
	Offset     *Offset                 `json:"offset,omitempty"`
	Position   *TitleAssetPositionEnum `json:"position,omitempty"`
	Size       *TitleAssetSizeEnum     `json:"size,omitempty"`
	Style      *TitleAssetStyleEnum    `json:"style,omitempty"`
	Text       string                  `json:"text"`
	Type       string                  `json:"type"`
}
