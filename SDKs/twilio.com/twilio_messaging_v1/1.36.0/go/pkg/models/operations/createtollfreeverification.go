package operations

import (
"openapi/pkg/models/shared")
var CreateTollfreeVerificationServers = []string{
	"https://messaging.twilio.com",
}

type CreateTollfreeVerificationCreateTollfreeVerificationRequest struct {
    AdditionalInformation *string `form:"name=AdditionalInformation"`
    BusinessCity *string `form:"name=BusinessCity"`
    BusinessContactEmail *string `form:"name=BusinessContactEmail"`
    BusinessContactFirstName *string `form:"name=BusinessContactFirstName"`
    BusinessContactLastName *string `form:"name=BusinessContactLastName"`
    BusinessContactPhone *string `form:"name=BusinessContactPhone"`
    BusinessCountry *string `form:"name=BusinessCountry"`
    BusinessName string `form:"name=BusinessName"`
    BusinessPostalCode *string `form:"name=BusinessPostalCode"`
    BusinessStateProvinceRegion *string `form:"name=BusinessStateProvinceRegion"`
    BusinessStreetAddress *string `form:"name=BusinessStreetAddress"`
    BusinessStreetAddress2 *string `form:"name=BusinessStreetAddress2"`
    BusinessWebsite string `form:"name=BusinessWebsite"`
    CustomerProfileSid *string `form:"name=CustomerProfileSid"`
    MessageVolume string `form:"name=MessageVolume"`
    NotificationEmail string `form:"name=NotificationEmail"`
    OptInImageUrls []string `form:"name=OptInImageUrls"`
    OptInType shared.TollfreeVerificationEnumOptInTypeEnum `form:"name=OptInType"`
    ProductionMessageSample string `form:"name=ProductionMessageSample"`
    TollfreePhoneNumberSid string `form:"name=TollfreePhoneNumberSid"`
    UseCaseCategories []string `form:"name=UseCaseCategories"`
    UseCaseSummary string `form:"name=UseCaseSummary"`
    
}

type CreateTollfreeVerificationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateTollfreeVerificationRequest struct {
    ServerURL *string 
    Request *CreateTollfreeVerificationCreateTollfreeVerificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateTollfreeVerificationSecurity 
    
}

type CreateTollfreeVerificationResponse struct {
    ContentType string 
    StatusCode int64 
    MessagingV1TollfreeVerification *shared.MessagingV1TollfreeVerification 
    
}

