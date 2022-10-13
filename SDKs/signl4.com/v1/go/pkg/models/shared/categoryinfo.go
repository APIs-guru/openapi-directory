package shared

import (
	"time"
)

type CategoryInfo struct {
	Augmentations   []CategoryAugmentation `json:"augmentations"`
	Color           *string                `json:"color"`
	ID              *string                `json:"id"`
	ImageName       *string                `json:"imageName"`
	IsDefault       *bool                  `json:"isDefault"`
	KeywordMatching *int32                 `json:"keywordMatching"`
	Keywords        []string               `json:"keywords"`
	LastMatch       *time.Time             `json:"lastMatch"`
	Name            *string                `json:"name"`
	Options         *int32                 `json:"options"`
	Order           *int32                 `json:"order"`
}
