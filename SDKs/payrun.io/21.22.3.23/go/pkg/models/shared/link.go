package shared

type LinkLinkLink struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type Link struct {
	Link *LinkLinkLink `json:"Link"`
}
