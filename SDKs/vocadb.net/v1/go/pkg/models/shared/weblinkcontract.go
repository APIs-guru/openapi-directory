package shared

type WebLinkContractCategoryEnum string

const (
	WebLinkContractCategoryEnumOfficial   WebLinkContractCategoryEnum = "Official"
	WebLinkContractCategoryEnumCommercial WebLinkContractCategoryEnum = "Commercial"
	WebLinkContractCategoryEnumReference  WebLinkContractCategoryEnum = "Reference"
	WebLinkContractCategoryEnumOther      WebLinkContractCategoryEnum = "Other"
)

type WebLinkContract struct {
	Category         *WebLinkContractCategoryEnum `json:"category"`
	Description      *string                      `json:"description"`
	DescriptionOrURL *string                      `json:"descriptionOrUrl"`
	Disabled         *bool                        `json:"disabled"`
	ID               *int32                       `json:"id"`
	URL              *string                      `json:"url"`
}
