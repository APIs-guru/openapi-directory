package shared




type WebLinkForAPIContractCategoryEnum string

const (
    WebLinkForAPIContractCategoryEnumOfficial WebLinkForAPIContractCategoryEnum = "Official"
WebLinkForAPIContractCategoryEnumCommercial WebLinkForAPIContractCategoryEnum = "Commercial"
WebLinkForAPIContractCategoryEnumReference WebLinkForAPIContractCategoryEnum = "Reference"
WebLinkForAPIContractCategoryEnumOther WebLinkForAPIContractCategoryEnum = "Other"
)


type WebLinkForAPIContract struct {
    Category *WebLinkForAPIContractCategoryEnum `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    DescriptionOrURL *string `json:"descriptionOrUrl,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    ID *int32 `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

