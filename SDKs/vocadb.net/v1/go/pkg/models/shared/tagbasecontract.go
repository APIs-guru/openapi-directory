package shared

type TagBaseContract struct {
	AdditionalNames *string `json:"additionalNames" form:"name=additionalNames"`
	CategoryName    *string `json:"categoryName" form:"name=categoryName"`
	ID              *int32  `json:"id" form:"name=id"`
	Name            *string `json:"name" form:"name=name"`
	URLSlug         *string `json:"urlSlug" form:"name=urlSlug"`
}
