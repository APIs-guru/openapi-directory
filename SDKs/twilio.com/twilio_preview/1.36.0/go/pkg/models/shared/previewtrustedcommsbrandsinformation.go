package shared

import (
	"time"
)

type PreviewTrustedCommsBrandsInformation struct {
	FileLink             *string    `json:"file_link"`
	FileLinkTTLInSeconds *string    `json:"file_link_ttl_in_seconds"`
	UpdateTime           *time.Time `json:"update_time"`
	URL                  *string    `json:"url"`
}
