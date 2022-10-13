package operations

type GetAudioPathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetAudioUseCanonicalEnum string

const (
	GetAudioUseCanonicalEnumFalse GetAudioUseCanonicalEnum = "false"
	GetAudioUseCanonicalEnumTrue  GetAudioUseCanonicalEnum = "true"
)

type GetAudioQueryParams struct {
	Limit        *int32                    `queryParam:"style=form,explode=true,name=limit"`
	UseCanonical *GetAudioUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
}

type GetAudioRequest struct {
	PathParams  GetAudioPathParams
	QueryParams GetAudioQueryParams
}

type GetAudioResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
