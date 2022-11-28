package shared

type Tags struct {
	Count            *int64
	HasSynonyms      *bool
	IsModeratorOnly  *bool
	IsRequired       *bool
	LastActivityDate *int64
	Name             *string
	Synonyms         []interface{}
	UserID           *int64
}
