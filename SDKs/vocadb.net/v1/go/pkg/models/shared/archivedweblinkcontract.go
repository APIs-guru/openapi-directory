package shared

type ArchivedWebLinkContractCategoryEnum string

const (
	ArchivedWebLinkContractCategoryEnumOfficial   ArchivedWebLinkContractCategoryEnum = "Official"
	ArchivedWebLinkContractCategoryEnumCommercial ArchivedWebLinkContractCategoryEnum = "Commercial"
	ArchivedWebLinkContractCategoryEnumReference  ArchivedWebLinkContractCategoryEnum = "Reference"
	ArchivedWebLinkContractCategoryEnumOther      ArchivedWebLinkContractCategoryEnum = "Other"
)

type ArchivedWebLinkContract struct {
	Category    *ArchivedWebLinkContractCategoryEnum `json:"category,omitempty"`
	Description *string                              `json:"description,omitempty"`
	Disabled    *bool                                `json:"disabled,omitempty"`
	URL         *string                              `json:"url,omitempty"`
}
