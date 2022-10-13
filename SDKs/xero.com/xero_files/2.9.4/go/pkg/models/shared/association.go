package shared

type Association struct {
	FileID      *string          `json:"FileId"`
	ObjectGroup *ObjectGroupEnum `json:"ObjectGroup"`
	ObjectID    *string          `json:"ObjectId"`
	ObjectType  *ObjectTypeEnum  `json:"ObjectType"`
}
