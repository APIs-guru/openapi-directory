package shared

type SchemeAzureAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	AzureAuth SchemeAzureAuth `security:"scheme,type=oauth2"`
}
