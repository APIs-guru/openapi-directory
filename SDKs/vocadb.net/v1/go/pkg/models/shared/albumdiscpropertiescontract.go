package shared

type AlbumDiscPropertiesContractMediaTypeEnum string

const (
	AlbumDiscPropertiesContractMediaTypeEnumAudio AlbumDiscPropertiesContractMediaTypeEnum = "Audio"
	AlbumDiscPropertiesContractMediaTypeEnumVideo AlbumDiscPropertiesContractMediaTypeEnum = "Video"
)

type AlbumDiscPropertiesContract struct {
	DiscNumber *int32                                    `json:"discNumber"`
	ID         *int32                                    `json:"id"`
	MediaType  *AlbumDiscPropertiesContractMediaTypeEnum `json:"mediaType"`
	Name       *string                                   `json:"name"`
}
