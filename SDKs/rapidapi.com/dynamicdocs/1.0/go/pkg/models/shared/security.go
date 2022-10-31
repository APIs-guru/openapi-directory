package shared

type SchemeAdvSecurityToken struct {
	APIKey string `security:"name=ADVICEment API Key"`
}

type SchemeXRapidAPIKey struct {
	APIKey string `security:"name=RapidAPI.com API Key"`
}

type SecurityOption1 struct {
	AdvSecurityToken SchemeAdvSecurityToken `security:"scheme,type=apiKey,subtype=header"`
}

type SecurityOption2 struct {
	XRapidAPIKey SchemeXRapidAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
}
