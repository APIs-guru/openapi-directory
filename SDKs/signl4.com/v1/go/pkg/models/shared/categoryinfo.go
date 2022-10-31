package shared

import (
"time")

type CategoryInfo struct {
    Augmentations []CategoryAugmentation `json:"augmentations,omitempty"`
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    ImageName *string `json:"imageName,omitempty"`
    IsDefault *bool `json:"isDefault,omitempty"`
    KeywordMatching *int32 `json:"keywordMatching,omitempty"`
    Keywords []string `json:"keywords,omitempty"`
    LastMatch *time.Time `json:"lastMatch,omitempty"`
    Name *string `json:"name,omitempty"`
    Options *int32 `json:"options,omitempty"`
    Order *int32 `json:"order,omitempty"`
    
}

