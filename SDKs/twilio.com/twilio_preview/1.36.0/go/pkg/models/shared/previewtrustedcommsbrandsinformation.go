package shared

import (
	"time"
)

type PreviewTrustedCommsBrandsInformation struct {
	FileLink             *string    `json:"file_link,omitempty"`
	FileLinkTTLInSeconds *string    `json:"file_link_ttl_in_seconds,omitempty"`
	UpdateTime           *time.Time `json:"update_time,omitempty"`
	URL                  *string    `json:"url,omitempty"`
}
