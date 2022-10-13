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

type TitleAsset struct {
	Background *string                 `json:"background"`
	Color      *string                 `json:"color"`
	Offset     *Offset                 `json:"offset"`
	Position   *TitleAssetPositionEnum `json:"position"`
	Size       *TitleAssetSizeEnum     `json:"size"`
	Style      *TitleAssetStyleEnum    `json:"style"`
	Text       string                  `json:"text"`
	Type       string                  `json:"type"`
}
