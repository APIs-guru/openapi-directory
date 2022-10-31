package shared




type WebcastTypeEnum string

const (
    WebcastTypeEnumYoutube WebcastTypeEnum = "youtube"
WebcastTypeEnumTwitch WebcastTypeEnum = "twitch"
WebcastTypeEnumUstream WebcastTypeEnum = "ustream"
WebcastTypeEnumIframe WebcastTypeEnum = "iframe"
WebcastTypeEnumHtml5 WebcastTypeEnum = "html5"
WebcastTypeEnumRtmp WebcastTypeEnum = "rtmp"
WebcastTypeEnumLivestream WebcastTypeEnum = "livestream"
WebcastTypeEnumDirectLink WebcastTypeEnum = "direct_link"
WebcastTypeEnumMms WebcastTypeEnum = "mms"
WebcastTypeEnumJustin WebcastTypeEnum = "justin"
WebcastTypeEnumStemtv WebcastTypeEnum = "stemtv"
WebcastTypeEnumDacast WebcastTypeEnum = "dacast"
)


type Webcast struct {
    Channel string `json:"channel"`
    Date *string `json:"date,omitempty"`
    File *string `json:"file,omitempty"`
    Type WebcastTypeEnum `json:"type"`
    
}

