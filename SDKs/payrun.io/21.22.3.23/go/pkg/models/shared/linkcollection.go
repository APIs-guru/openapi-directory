package shared

type LinkCollectionLinkCollectionLinksLink struct {
	Link []interface{} `json:"Link"`
}

type LinkCollectionLinkCollectionLinkCollection struct {
	Links *LinkCollectionLinkCollectionLinksLink `json:"Links"`
}

type LinkCollection struct {
	LinkCollection *LinkCollectionLinkCollectionLinkCollection `json:"LinkCollection"`
}
