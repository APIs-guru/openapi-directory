package shared

type AlbumDiscPropertiesContractMediaTypeEnum string

const (
	AlbumDiscPropertiesContractMediaTypeEnumAudio AlbumDiscPropertiesContractMediaTypeEnum = "Audio"
	AlbumDiscPropertiesContractMediaTypeEnumVideo AlbumDiscPropertiesContractMediaTypeEnum = "Video"
)

type AlbumDiscPropertiesContract struct {
	DiscNumber *int32                                    `json:"discNumber,omitempty"`
	ID         *int32                                    `json:"id,omitempty"`
	MediaType  *AlbumDiscPropertiesContractMediaTypeEnum `json:"mediaType,omitempty"`
	Name       *string                                   `json:"name,omitempty"`
}
