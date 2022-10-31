package shared



type LinkCollectionLinkCollectionLink struct {
    Link []interface{} `json:"Link,omitempty"`
    
}

type LinkCollectionLinkCollection struct {
    Links *LinkCollectionLinkCollectionLink `json:"Links,omitempty"`
    
}

type LinkCollection struct {
    LinkCollection *LinkCollectionLinkCollection `json:"LinkCollection,omitempty"`
    
}

