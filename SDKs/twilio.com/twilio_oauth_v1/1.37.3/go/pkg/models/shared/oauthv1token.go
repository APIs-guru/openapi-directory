package shared

import (
	"time"
)

type OauthV1Token struct {
	AccessToken           *string    `json:"access_token,omitempty"`
	AccessTokenExpiresAt  *time.Time `json:"access_token_expires_at,omitempty"`
	IDToken               *string    `json:"id_token,omitempty"`
	RefreshToken          *string    `json:"refresh_token,omitempty"`
	RefreshTokenExpiresAt *time.Time `json:"refresh_token_expires_at,omitempty"`
}
