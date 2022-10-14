package shared

type WebLinkContractCategoryEnum string

const (
	WebLinkContractCategoryEnumOfficial   WebLinkContractCategoryEnum = "Official"
	WebLinkContractCategoryEnumCommercial WebLinkContractCategoryEnum = "Commercial"
	WebLinkContractCategoryEnumReference  WebLinkContractCategoryEnum = "Reference"
	WebLinkContractCategoryEnumOther      WebLinkContractCategoryEnum = "Other"
)

type WebLinkContract struct {
	Category         *WebLinkContractCategoryEnum `json:"category,omitempty"`
	Description      *string                      `json:"description,omitempty"`
	DescriptionOrURL *string                      `json:"descriptionOrUrl,omitempty"`
	Disabled         *bool                        `json:"disabled,omitempty"`
	ID               *int32                       `json:"id,omitempty"`
	URL              *string                      `json:"url,omitempty"`
}
