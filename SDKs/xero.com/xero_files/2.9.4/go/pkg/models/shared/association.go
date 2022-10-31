package shared



type Association struct {
    FileID *string `json:"FileId,omitempty"`
    ObjectGroup *ObjectGroupEnum `json:"ObjectGroup,omitempty"`
    ObjectID *string `json:"ObjectId,omitempty"`
    ObjectType *ObjectTypeEnum `json:"ObjectType,omitempty"`
    
}

