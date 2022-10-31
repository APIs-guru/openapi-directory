package operations

import (
"openapi/pkg/models/shared")
var CreateSiprecServers = []string{
	"https://api.twilio.com",
}

type CreateSiprecPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
    
}


type CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum string

const (
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumHead CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "HEAD"
CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumGet CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "GET"
CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumPost CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "POST"
CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumPatch CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "PATCH"
CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumPut CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "PUT"
CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumDelete CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = "DELETE"
)


type CreateSiprecCreateSiprecRequest struct {
    ConnectorName *string `form:"name=ConnectorName"`
    Name *string `form:"name=Name"`
    Parameter1Name *string `form:"name=Parameter1.Name"`
    Parameter1Value *string `form:"name=Parameter1.Value"`
    Parameter10Name *string `form:"name=Parameter10.Name"`
    Parameter10Value *string `form:"name=Parameter10.Value"`
    Parameter11Name *string `form:"name=Parameter11.Name"`
    Parameter11Value *string `form:"name=Parameter11.Value"`
    Parameter12Name *string `form:"name=Parameter12.Name"`
    Parameter12Value *string `form:"name=Parameter12.Value"`
    Parameter13Name *string `form:"name=Parameter13.Name"`
    Parameter13Value *string `form:"name=Parameter13.Value"`
    Parameter14Name *string `form:"name=Parameter14.Name"`
    Parameter14Value *string `form:"name=Parameter14.Value"`
    Parameter15Name *string `form:"name=Parameter15.Name"`
    Parameter15Value *string `form:"name=Parameter15.Value"`
    Parameter16Name *string `form:"name=Parameter16.Name"`
    Parameter16Value *string `form:"name=Parameter16.Value"`
    Parameter17Name *string `form:"name=Parameter17.Name"`
    Parameter17Value *string `form:"name=Parameter17.Value"`
    Parameter18Name *string `form:"name=Parameter18.Name"`
    Parameter18Value *string `form:"name=Parameter18.Value"`
    Parameter19Name *string `form:"name=Parameter19.Name"`
    Parameter19Value *string `form:"name=Parameter19.Value"`
    Parameter2Name *string `form:"name=Parameter2.Name"`
    Parameter2Value *string `form:"name=Parameter2.Value"`
    Parameter20Name *string `form:"name=Parameter20.Name"`
    Parameter20Value *string `form:"name=Parameter20.Value"`
    Parameter21Name *string `form:"name=Parameter21.Name"`
    Parameter21Value *string `form:"name=Parameter21.Value"`
    Parameter22Name *string `form:"name=Parameter22.Name"`
    Parameter22Value *string `form:"name=Parameter22.Value"`
    Parameter23Name *string `form:"name=Parameter23.Name"`
    Parameter23Value *string `form:"name=Parameter23.Value"`
    Parameter24Name *string `form:"name=Parameter24.Name"`
    Parameter24Value *string `form:"name=Parameter24.Value"`
    Parameter25Name *string `form:"name=Parameter25.Name"`
    Parameter25Value *string `form:"name=Parameter25.Value"`
    Parameter26Name *string `form:"name=Parameter26.Name"`
    Parameter26Value *string `form:"name=Parameter26.Value"`
    Parameter27Name *string `form:"name=Parameter27.Name"`
    Parameter27Value *string `form:"name=Parameter27.Value"`
    Parameter28Name *string `form:"name=Parameter28.Name"`
    Parameter28Value *string `form:"name=Parameter28.Value"`
    Parameter29Name *string `form:"name=Parameter29.Name"`
    Parameter29Value *string `form:"name=Parameter29.Value"`
    Parameter3Name *string `form:"name=Parameter3.Name"`
    Parameter3Value *string `form:"name=Parameter3.Value"`
    Parameter30Name *string `form:"name=Parameter30.Name"`
    Parameter30Value *string `form:"name=Parameter30.Value"`
    Parameter31Name *string `form:"name=Parameter31.Name"`
    Parameter31Value *string `form:"name=Parameter31.Value"`
    Parameter32Name *string `form:"name=Parameter32.Name"`
    Parameter32Value *string `form:"name=Parameter32.Value"`
    Parameter33Name *string `form:"name=Parameter33.Name"`
    Parameter33Value *string `form:"name=Parameter33.Value"`
    Parameter34Name *string `form:"name=Parameter34.Name"`
    Parameter34Value *string `form:"name=Parameter34.Value"`
    Parameter35Name *string `form:"name=Parameter35.Name"`
    Parameter35Value *string `form:"name=Parameter35.Value"`
    Parameter36Name *string `form:"name=Parameter36.Name"`
    Parameter36Value *string `form:"name=Parameter36.Value"`
    Parameter37Name *string `form:"name=Parameter37.Name"`
    Parameter37Value *string `form:"name=Parameter37.Value"`
    Parameter38Name *string `form:"name=Parameter38.Name"`
    Parameter38Value *string `form:"name=Parameter38.Value"`
    Parameter39Name *string `form:"name=Parameter39.Name"`
    Parameter39Value *string `form:"name=Parameter39.Value"`
    Parameter4Name *string `form:"name=Parameter4.Name"`
    Parameter4Value *string `form:"name=Parameter4.Value"`
    Parameter40Name *string `form:"name=Parameter40.Name"`
    Parameter40Value *string `form:"name=Parameter40.Value"`
    Parameter41Name *string `form:"name=Parameter41.Name"`
    Parameter41Value *string `form:"name=Parameter41.Value"`
    Parameter42Name *string `form:"name=Parameter42.Name"`
    Parameter42Value *string `form:"name=Parameter42.Value"`
    Parameter43Name *string `form:"name=Parameter43.Name"`
    Parameter43Value *string `form:"name=Parameter43.Value"`
    Parameter44Name *string `form:"name=Parameter44.Name"`
    Parameter44Value *string `form:"name=Parameter44.Value"`
    Parameter45Name *string `form:"name=Parameter45.Name"`
    Parameter45Value *string `form:"name=Parameter45.Value"`
    Parameter46Name *string `form:"name=Parameter46.Name"`
    Parameter46Value *string `form:"name=Parameter46.Value"`
    Parameter47Name *string `form:"name=Parameter47.Name"`
    Parameter47Value *string `form:"name=Parameter47.Value"`
    Parameter48Name *string `form:"name=Parameter48.Name"`
    Parameter48Value *string `form:"name=Parameter48.Value"`
    Parameter49Name *string `form:"name=Parameter49.Name"`
    Parameter49Value *string `form:"name=Parameter49.Value"`
    Parameter5Name *string `form:"name=Parameter5.Name"`
    Parameter5Value *string `form:"name=Parameter5.Value"`
    Parameter50Name *string `form:"name=Parameter50.Name"`
    Parameter50Value *string `form:"name=Parameter50.Value"`
    Parameter51Name *string `form:"name=Parameter51.Name"`
    Parameter51Value *string `form:"name=Parameter51.Value"`
    Parameter52Name *string `form:"name=Parameter52.Name"`
    Parameter52Value *string `form:"name=Parameter52.Value"`
    Parameter53Name *string `form:"name=Parameter53.Name"`
    Parameter53Value *string `form:"name=Parameter53.Value"`
    Parameter54Name *string `form:"name=Parameter54.Name"`
    Parameter54Value *string `form:"name=Parameter54.Value"`
    Parameter55Name *string `form:"name=Parameter55.Name"`
    Parameter55Value *string `form:"name=Parameter55.Value"`
    Parameter56Name *string `form:"name=Parameter56.Name"`
    Parameter56Value *string `form:"name=Parameter56.Value"`
    Parameter57Name *string `form:"name=Parameter57.Name"`
    Parameter57Value *string `form:"name=Parameter57.Value"`
    Parameter58Name *string `form:"name=Parameter58.Name"`
    Parameter58Value *string `form:"name=Parameter58.Value"`
    Parameter59Name *string `form:"name=Parameter59.Name"`
    Parameter59Value *string `form:"name=Parameter59.Value"`
    Parameter6Name *string `form:"name=Parameter6.Name"`
    Parameter6Value *string `form:"name=Parameter6.Value"`
    Parameter60Name *string `form:"name=Parameter60.Name"`
    Parameter60Value *string `form:"name=Parameter60.Value"`
    Parameter61Name *string `form:"name=Parameter61.Name"`
    Parameter61Value *string `form:"name=Parameter61.Value"`
    Parameter62Name *string `form:"name=Parameter62.Name"`
    Parameter62Value *string `form:"name=Parameter62.Value"`
    Parameter63Name *string `form:"name=Parameter63.Name"`
    Parameter63Value *string `form:"name=Parameter63.Value"`
    Parameter64Name *string `form:"name=Parameter64.Name"`
    Parameter64Value *string `form:"name=Parameter64.Value"`
    Parameter65Name *string `form:"name=Parameter65.Name"`
    Parameter65Value *string `form:"name=Parameter65.Value"`
    Parameter66Name *string `form:"name=Parameter66.Name"`
    Parameter66Value *string `form:"name=Parameter66.Value"`
    Parameter67Name *string `form:"name=Parameter67.Name"`
    Parameter67Value *string `form:"name=Parameter67.Value"`
    Parameter68Name *string `form:"name=Parameter68.Name"`
    Parameter68Value *string `form:"name=Parameter68.Value"`
    Parameter69Name *string `form:"name=Parameter69.Name"`
    Parameter69Value *string `form:"name=Parameter69.Value"`
    Parameter7Name *string `form:"name=Parameter7.Name"`
    Parameter7Value *string `form:"name=Parameter7.Value"`
    Parameter70Name *string `form:"name=Parameter70.Name"`
    Parameter70Value *string `form:"name=Parameter70.Value"`
    Parameter71Name *string `form:"name=Parameter71.Name"`
    Parameter71Value *string `form:"name=Parameter71.Value"`
    Parameter72Name *string `form:"name=Parameter72.Name"`
    Parameter72Value *string `form:"name=Parameter72.Value"`
    Parameter73Name *string `form:"name=Parameter73.Name"`
    Parameter73Value *string `form:"name=Parameter73.Value"`
    Parameter74Name *string `form:"name=Parameter74.Name"`
    Parameter74Value *string `form:"name=Parameter74.Value"`
    Parameter75Name *string `form:"name=Parameter75.Name"`
    Parameter75Value *string `form:"name=Parameter75.Value"`
    Parameter76Name *string `form:"name=Parameter76.Name"`
    Parameter76Value *string `form:"name=Parameter76.Value"`
    Parameter77Name *string `form:"name=Parameter77.Name"`
    Parameter77Value *string `form:"name=Parameter77.Value"`
    Parameter78Name *string `form:"name=Parameter78.Name"`
    Parameter78Value *string `form:"name=Parameter78.Value"`
    Parameter79Name *string `form:"name=Parameter79.Name"`
    Parameter79Value *string `form:"name=Parameter79.Value"`
    Parameter8Name *string `form:"name=Parameter8.Name"`
    Parameter8Value *string `form:"name=Parameter8.Value"`
    Parameter80Name *string `form:"name=Parameter80.Name"`
    Parameter80Value *string `form:"name=Parameter80.Value"`
    Parameter81Name *string `form:"name=Parameter81.Name"`
    Parameter81Value *string `form:"name=Parameter81.Value"`
    Parameter82Name *string `form:"name=Parameter82.Name"`
    Parameter82Value *string `form:"name=Parameter82.Value"`
    Parameter83Name *string `form:"name=Parameter83.Name"`
    Parameter83Value *string `form:"name=Parameter83.Value"`
    Parameter84Name *string `form:"name=Parameter84.Name"`
    Parameter84Value *string `form:"name=Parameter84.Value"`
    Parameter85Name *string `form:"name=Parameter85.Name"`
    Parameter85Value *string `form:"name=Parameter85.Value"`
    Parameter86Name *string `form:"name=Parameter86.Name"`
    Parameter86Value *string `form:"name=Parameter86.Value"`
    Parameter87Name *string `form:"name=Parameter87.Name"`
    Parameter87Value *string `form:"name=Parameter87.Value"`
    Parameter88Name *string `form:"name=Parameter88.Name"`
    Parameter88Value *string `form:"name=Parameter88.Value"`
    Parameter89Name *string `form:"name=Parameter89.Name"`
    Parameter89Value *string `form:"name=Parameter89.Value"`
    Parameter9Name *string `form:"name=Parameter9.Name"`
    Parameter9Value *string `form:"name=Parameter9.Value"`
    Parameter90Name *string `form:"name=Parameter90.Name"`
    Parameter90Value *string `form:"name=Parameter90.Value"`
    Parameter91Name *string `form:"name=Parameter91.Name"`
    Parameter91Value *string `form:"name=Parameter91.Value"`
    Parameter92Name *string `form:"name=Parameter92.Name"`
    Parameter92Value *string `form:"name=Parameter92.Value"`
    Parameter93Name *string `form:"name=Parameter93.Name"`
    Parameter93Value *string `form:"name=Parameter93.Value"`
    Parameter94Name *string `form:"name=Parameter94.Name"`
    Parameter94Value *string `form:"name=Parameter94.Value"`
    Parameter95Name *string `form:"name=Parameter95.Name"`
    Parameter95Value *string `form:"name=Parameter95.Value"`
    Parameter96Name *string `form:"name=Parameter96.Name"`
    Parameter96Value *string `form:"name=Parameter96.Value"`
    Parameter97Name *string `form:"name=Parameter97.Name"`
    Parameter97Value *string `form:"name=Parameter97.Value"`
    Parameter98Name *string `form:"name=Parameter98.Name"`
    Parameter98Value *string `form:"name=Parameter98.Value"`
    Parameter99Name *string `form:"name=Parameter99.Name"`
    Parameter99Value *string `form:"name=Parameter99.Value"`
    StatusCallback *string `form:"name=StatusCallback"`
    StatusCallbackMethod *CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    Track *shared.SiprecEnumTrackEnum `form:"name=Track"`
    
}

type CreateSiprecSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSiprecRequest struct {
    ServerURL *string 
    PathParams CreateSiprecPathParams 
    Request *CreateSiprecCreateSiprecRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSiprecSecurity 
    
}

type CreateSiprecResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountCallSiprec *shared.APIV2010AccountCallSiprec 
    
}

