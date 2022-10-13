package shared

type TagUsageForAPIContract struct {
	Count *int32           `json:"count"`
	Tag   *TagBaseContract `json:"tag"`
}
