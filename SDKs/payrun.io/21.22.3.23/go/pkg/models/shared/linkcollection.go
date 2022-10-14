package shared

type LinkCollectionLinkCollectionLinksLink struct {
	Link []interface{} `json:"Link,omitempty"`
}

type LinkCollectionLinkCollectionLinkCollection struct {
	Links *LinkCollectionLinkCollectionLinksLink `json:"Links,omitempty"`
}

type LinkCollection struct {
	LinkCollection *LinkCollectionLinkCollectionLinkCollection `json:"LinkCollection,omitempty"`
}
