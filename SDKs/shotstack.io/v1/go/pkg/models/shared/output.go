package shared

type OutputAspectRatioEnum string

const (
	OutputAspectRatioEnumSixteen9 OutputAspectRatioEnum = "16:9"
	OutputAspectRatioEnumNine16   OutputAspectRatioEnum = "9:16"
	OutputAspectRatioEnumOne1     OutputAspectRatioEnum = "1:1"
	OutputAspectRatioEnumFour5    OutputAspectRatioEnum = "4:5"
	OutputAspectRatioEnumFour3    OutputAspectRatioEnum = "4:3"
)

type OutputFormatEnum string

const (
	OutputFormatEnumMp4 OutputFormatEnum = "mp4"
	OutputFormatEnumGif OutputFormatEnum = "gif"
	OutputFormatEnumMp3 OutputFormatEnum = "mp3"
	OutputFormatEnumJpg OutputFormatEnum = "jpg"
	OutputFormatEnumPng OutputFormatEnum = "png"
	OutputFormatEnumBmp OutputFormatEnum = "bmp"
)

type OutputQualityEnum string

const (
	OutputQualityEnumLow    OutputQualityEnum = "low"
	OutputQualityEnumMedium OutputQualityEnum = "medium"
	OutputQualityEnumHigh   OutputQualityEnum = "high"
)

type OutputResolutionEnum string

const (
	OutputResolutionEnumPreview              OutputResolutionEnum = "preview"
	OutputResolutionEnumMobile               OutputResolutionEnum = "mobile"
	OutputResolutionEnumSd                   OutputResolutionEnum = "sd"
	OutputResolutionEnumHd                   OutputResolutionEnum = "hd"
	OutputResolutionEnumOneThousandAndEighty OutputResolutionEnum = "1080"
)

type OutputScaleToEnum string

const (
	OutputScaleToEnumPreview              OutputScaleToEnum = "preview"
	OutputScaleToEnumMobile               OutputScaleToEnum = "mobile"
	OutputScaleToEnumSd                   OutputScaleToEnum = "sd"
	OutputScaleToEnumHd                   OutputScaleToEnum = "hd"
	OutputScaleToEnumOneThousandAndEighty OutputScaleToEnum = "1080"
)

type Output struct {
	AspectRatio  *OutputAspectRatioEnum `json:"aspectRatio"`
	Destinations []interface{}          `json:"destinations"`
	Format       OutputFormatEnum       `json:"format"`
	Fps          *int64                 `json:"fps"`
	Poster       *Poster                `json:"poster"`
	Quality      *OutputQualityEnum     `json:"quality"`
	Range        *Range                 `json:"range"`
	Resolution   *OutputResolutionEnum  `json:"resolution"`
	ScaleTo      *OutputScaleToEnum     `json:"scaleTo"`
	Size         *Size                  `json:"size"`
	Thumbnail    *Thumbnail             `json:"thumbnail"`
}
