package shared

type ConstituencyRepresentationListItem struct {
	Links []Link                       `json:"links"`
	Value []ConstituencyRepresentation `json:"value"`
}
