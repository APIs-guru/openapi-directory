package shared

type LinkLinkLink struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type Link struct {
	Link *LinkLinkLink `json:"Link,omitempty"`
}
