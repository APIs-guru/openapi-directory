package shared



type TagBaseContract struct {
    AdditionalNames *string `json:"additionalNames,omitempty" form:"name=additionalNames"`
    CategoryName *string `json:"categoryName,omitempty" form:"name=categoryName"`
    ID *int32 `json:"id,omitempty" form:"name=id"`
    Name *string `json:"name,omitempty" form:"name=name"`
    URLSlug *string `json:"urlSlug,omitempty" form:"name=urlSlug"`
    
}

