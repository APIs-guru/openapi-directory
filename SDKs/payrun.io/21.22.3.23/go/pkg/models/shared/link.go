package shared

type LinkLink struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type Link struct {
	Link *LinkLink `json:"Link,omitempty"`
}
