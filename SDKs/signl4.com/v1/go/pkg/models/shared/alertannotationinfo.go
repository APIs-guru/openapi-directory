package shared

import (
	"time"
)

type AlertAnnotationInfo struct {
	AnnotationType *int32     `json:"annotationType"`
	ID             *string    `json:"id"`
	Text           *string    `json:"text"`
	Timestamp      *time.Time `json:"timestamp"`
	UserID         *string    `json:"userId"`
}
