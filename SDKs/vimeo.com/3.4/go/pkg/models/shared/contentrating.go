package shared




type ContentRatingCodeEnum string

const (
    ContentRatingCodeEnumDrugs ContentRatingCodeEnum = "drugs"
ContentRatingCodeEnumLanguage ContentRatingCodeEnum = "language"
ContentRatingCodeEnumNudity ContentRatingCodeEnum = "nudity"
ContentRatingCodeEnumSafe ContentRatingCodeEnum = "safe"
ContentRatingCodeEnumUnrated ContentRatingCodeEnum = "unrated"
ContentRatingCodeEnumViolence ContentRatingCodeEnum = "violence"
)


type ContentRating struct {
    Code ContentRatingCodeEnum `json:"code"`
    Name string `json:"name"`
    URI string `json:"uri"`
    
}

