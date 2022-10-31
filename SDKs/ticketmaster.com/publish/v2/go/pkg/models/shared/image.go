package shared




type ImageRatioEnum string

const (
    ImageRatioEnumOneHundredAndSixtyNine ImageRatioEnum = "169"
ImageRatioEnumThirtyTwo ImageRatioEnum = "32"
ImageRatioEnumFortyThree ImageRatioEnum = "43"
)


type Image struct {
    Attribution *string `json:"attribution,omitempty"`
    Domains []string `json:"domains,omitempty"`
    Fallback *bool `json:"fallback,omitempty"`
    Height *int32 `json:"height,omitempty"`
    Ratio *ImageRatioEnum `json:"ratio,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

