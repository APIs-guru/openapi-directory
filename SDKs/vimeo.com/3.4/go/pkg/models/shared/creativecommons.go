package shared

type CreativeCommonsCodeEnum string

const (
	CreativeCommonsCodeEnumBy     CreativeCommonsCodeEnum = "by"
	CreativeCommonsCodeEnumByNc   CreativeCommonsCodeEnum = "by-nc"
	CreativeCommonsCodeEnumByNcNd CreativeCommonsCodeEnum = "by-nc-nd"
	CreativeCommonsCodeEnumByNcSa CreativeCommonsCodeEnum = "by-nc-sa"
	CreativeCommonsCodeEnumByNd   CreativeCommonsCodeEnum = "by-nd"
	CreativeCommonsCodeEnumBySa   CreativeCommonsCodeEnum = "by-sa"
	CreativeCommonsCodeEnumCc0    CreativeCommonsCodeEnum = "cc0"
)

type CreativeCommons struct {
	Code CreativeCommonsCodeEnum `json:"code"`
	Name string                  `json:"name"`
	URI  string                  `json:"uri"`
}
