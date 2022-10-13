package shared

import (
	"time"
)

type UserImage struct {
	Content            *string    `json:"content"`
	ContentDisposition *string    `json:"contentDisposition"`
	ContentEncoding    *string    `json:"contentEncoding"`
	ContentType        *string    `json:"contentType"`
	LastModified       *time.Time `json:"lastModified"`
	Name               *string    `json:"name"`
}
