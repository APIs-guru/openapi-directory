package shared

type AuthTokenTypeEnum string

const (
	AuthTokenTypeEnumBearer AuthTokenTypeEnum = "bearer"
)

type Auth struct {
	AccessToken  string            `json:"access_token"`
	App          APIApp            `json:"app"`
	ExpiresOn    *string           `json:"expires_on"`
	RefreshToken *string           `json:"refresh_token"`
	Scope        string            `json:"scope"`
	TokenType    AuthTokenTypeEnum `json:"token_type"`
	User         *User             `json:"user"`
}
