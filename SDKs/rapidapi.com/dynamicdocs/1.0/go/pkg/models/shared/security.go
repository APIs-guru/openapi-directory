package shared

type SchemeAdvSecurityToken struct {
	APIKey string `security:"name=ADVICEment API Key"`
}

type SchemeXRapidAPIKey struct {
	APIKey string `security:"name=RapidAPI.com API Key"`
}

type Security struct {
	AdvSecurityToken *SchemeAdvSecurityToken `security:"scheme,type=apiKey,subtype=header"`
	XRapidAPIKey     *SchemeXRapidAPIKey     `security:"scheme,type=apiKey,subtype=header"`
}
