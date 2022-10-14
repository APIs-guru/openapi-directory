package shared

import (
	"time"
)

type UserImage struct {
	Content            *string    `json:"content,omitempty"`
	ContentDisposition *string    `json:"contentDisposition,omitempty"`
	ContentEncoding    *string    `json:"contentEncoding,omitempty"`
	ContentType        *string    `json:"contentType,omitempty"`
	LastModified       *time.Time `json:"lastModified,omitempty"`
	Name               *string    `json:"name,omitempty"`
}
