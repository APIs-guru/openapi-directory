package shared




type TextTrackTypeEnum string

const (
    TextTrackTypeEnumCaptions TextTrackTypeEnum = "captions"
TextTrackTypeEnumSubtitles TextTrackTypeEnum = "subtitles"
)


type TextTrack struct {
    Active bool `json:"active"`
    HlsLink string `json:"hls_link"`
    HlsLinkExpiresTime string `json:"hls_link_expires_time"`
    Language string `json:"language"`
    Link string `json:"link"`
    LinkExpiresTime string `json:"link_expires_time"`
    Name string `json:"name"`
    Type TextTrackTypeEnum `json:"type"`
    URI string `json:"uri"`
    
}

