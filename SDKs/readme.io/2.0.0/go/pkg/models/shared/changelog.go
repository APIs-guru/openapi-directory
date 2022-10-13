package shared

type ChangelogTypeEnum string

const (
	ChangelogTypeEnumUnknown    ChangelogTypeEnum = ""
	ChangelogTypeEnumAdded      ChangelogTypeEnum = "added"
	ChangelogTypeEnumFixed      ChangelogTypeEnum = "fixed"
	ChangelogTypeEnumImproved   ChangelogTypeEnum = "improved"
	ChangelogTypeEnumDeprecated ChangelogTypeEnum = "deprecated"
	ChangelogTypeEnumRemoved    ChangelogTypeEnum = "removed"
)

type Changelog struct {
	Body   string             `json:"body"`
	Hidden *bool              `json:"hidden"`
	Title  string             `json:"title"`
	Type   *ChangelogTypeEnum `json:"type"`
}
