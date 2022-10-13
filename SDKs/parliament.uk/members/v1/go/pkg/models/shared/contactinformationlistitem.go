package shared

type ContactInformationListItem struct {
	Links []Link               `json:"links"`
	Value []ContactInformation `json:"value"`
}
