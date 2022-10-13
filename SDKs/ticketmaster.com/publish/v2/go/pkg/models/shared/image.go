package shared

type ImageRatioEnum string

const (
	ImageRatioEnumOneHundredAndSixtyNine ImageRatioEnum = "169"
	ImageRatioEnumThirtyTwo              ImageRatioEnum = "32"
	ImageRatioEnumFortyThree             ImageRatioEnum = "43"
)

type Image struct {
	Attribution *string         `json:"attribution"`
	Domains     []string        `json:"domains"`
	Fallback    *bool           `json:"fallback"`
	Height      *int32          `json:"height"`
	Ratio       *ImageRatioEnum `json:"ratio"`
	URL         *string         `json:"url"`
	Width       *int32          `json:"width"`
}
