package shared

type WebLinkForAPIContractCategoryEnum string

const (
	WebLinkForAPIContractCategoryEnumOfficial   WebLinkForAPIContractCategoryEnum = "Official"
	WebLinkForAPIContractCategoryEnumCommercial WebLinkForAPIContractCategoryEnum = "Commercial"
	WebLinkForAPIContractCategoryEnumReference  WebLinkForAPIContractCategoryEnum = "Reference"
	WebLinkForAPIContractCategoryEnumOther      WebLinkForAPIContractCategoryEnum = "Other"
)

type WebLinkForAPIContract struct {
	Category         *WebLinkForAPIContractCategoryEnum `json:"category"`
	Description      *string                            `json:"description"`
	DescriptionOrURL *string                            `json:"descriptionOrUrl"`
	Disabled         *bool                              `json:"disabled"`
	ID               *int32                             `json:"id"`
	URL              *string                            `json:"url"`
}
