package shared

import (
	"time"
)

type PreviewTrustedCommsCurrentCall struct {
	BgColor   *string    `json:"bg_color"`
	Caller    *string    `json:"caller"`
	CreatedAt *time.Time `json:"created_at"`
	FontColor *string    `json:"font_color"`
	From      *string    `json:"from"`
	Logo      *string    `json:"logo"`
	Manager   *string    `json:"manager"`
	Reason    *string    `json:"reason"`
	ShieldImg *string    `json:"shield_img"`
	Sid       *string    `json:"sid"`
	Status    *string    `json:"status"`
	To        *string    `json:"to"`
	URL       *string    `json:"url"`
	UseCase   *string    `json:"use_case"`
}
