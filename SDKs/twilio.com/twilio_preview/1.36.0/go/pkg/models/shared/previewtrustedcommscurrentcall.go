package shared

import (
"time")

type PreviewTrustedCommsCurrentCall struct {
    BgColor *string `json:"bg_color,omitempty"`
    Caller *string `json:"caller,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    FontColor *string `json:"font_color,omitempty"`
    From *string `json:"from,omitempty"`
    Logo *string `json:"logo,omitempty"`
    Manager *string `json:"manager,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ShieldImg *string `json:"shield_img,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *string `json:"status,omitempty"`
    To *string `json:"to,omitempty"`
    URL *string `json:"url,omitempty"`
    UseCase *string `json:"use_case,omitempty"`
    
}

