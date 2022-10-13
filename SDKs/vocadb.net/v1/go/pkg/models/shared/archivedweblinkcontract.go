package shared

type ArchivedWebLinkContractCategoryEnum string

const (
	ArchivedWebLinkContractCategoryEnumOfficial   ArchivedWebLinkContractCategoryEnum = "Official"
	ArchivedWebLinkContractCategoryEnumCommercial ArchivedWebLinkContractCategoryEnum = "Commercial"
	ArchivedWebLinkContractCategoryEnumReference  ArchivedWebLinkContractCategoryEnum = "Reference"
	ArchivedWebLinkContractCategoryEnumOther      ArchivedWebLinkContractCategoryEnum = "Other"
)

type ArchivedWebLinkContract struct {
	Category    *ArchivedWebLinkContractCategoryEnum `json:"category"`
	Description *string                              `json:"description"`
	Disabled    *bool                                `json:"disabled"`
	URL         *string                              `json:"url"`
}
