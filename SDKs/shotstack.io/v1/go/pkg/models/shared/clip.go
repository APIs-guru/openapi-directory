package shared

type ClipEffectEnum string

const (
	ClipEffectEnumZoomIn     ClipEffectEnum = "zoomIn"
	ClipEffectEnumZoomOut    ClipEffectEnum = "zoomOut"
	ClipEffectEnumSlideLeft  ClipEffectEnum = "slideLeft"
	ClipEffectEnumSlideRight ClipEffectEnum = "slideRight"
	ClipEffectEnumSlideUp    ClipEffectEnum = "slideUp"
	ClipEffectEnumSlideDown  ClipEffectEnum = "slideDown"
)

type ClipFilterEnum string

const (
	ClipFilterEnumBoost     ClipFilterEnum = "boost"
	ClipFilterEnumContrast  ClipFilterEnum = "contrast"
	ClipFilterEnumDarken    ClipFilterEnum = "darken"
	ClipFilterEnumGreyscale ClipFilterEnum = "greyscale"
	ClipFilterEnumLighten   ClipFilterEnum = "lighten"
	ClipFilterEnumMuted     ClipFilterEnum = "muted"
	ClipFilterEnumNegative  ClipFilterEnum = "negative"
)

type ClipFitEnum string

const (
	ClipFitEnumCover   ClipFitEnum = "cover"
	ClipFitEnumContain ClipFitEnum = "contain"
	ClipFitEnumCrop    ClipFitEnum = "crop"
	ClipFitEnumNone    ClipFitEnum = "none"
)

type ClipPositionEnum string

const (
	ClipPositionEnumTop         ClipPositionEnum = "top"
	ClipPositionEnumTopRight    ClipPositionEnum = "topRight"
	ClipPositionEnumRight       ClipPositionEnum = "right"
	ClipPositionEnumBottomRight ClipPositionEnum = "bottomRight"
	ClipPositionEnumBottom      ClipPositionEnum = "bottom"
	ClipPositionEnumBottomLeft  ClipPositionEnum = "bottomLeft"
	ClipPositionEnumLeft        ClipPositionEnum = "left"
	ClipPositionEnumTopLeft     ClipPositionEnum = "topLeft"
	ClipPositionEnumCenter      ClipPositionEnum = "center"
)

type Clip struct {
	Asset      interface{}       `json:"asset"`
	Effect     *ClipEffectEnum   `json:"effect,omitempty"`
	Filter     *ClipFilterEnum   `json:"filter,omitempty"`
	Fit        *ClipFitEnum      `json:"fit,omitempty"`
	Length     float64           `json:"length"`
	Offset     *Offset           `json:"offset,omitempty"`
	Opacity    *float64          `json:"opacity,omitempty"`
	Position   *ClipPositionEnum `json:"position,omitempty"`
	Scale      *float64          `json:"scale,omitempty"`
	Start      float64           `json:"start"`
	Transition *Transition       `json:"transition,omitempty"`
}
