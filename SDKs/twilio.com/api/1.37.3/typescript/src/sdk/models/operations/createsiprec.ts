import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSiprecServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSiprecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}

export enum CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateSiprecCreateSiprecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ConnectorName;" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter1.Name;" })
  parameter1Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter1.Value;" })
  parameter1Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter10.Name;" })
  parameter10Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter10.Value;" })
  parameter10Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter11.Name;" })
  parameter11Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter11.Value;" })
  parameter11Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter12.Name;" })
  parameter12Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter12.Value;" })
  parameter12Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter13.Name;" })
  parameter13Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter13.Value;" })
  parameter13Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter14.Name;" })
  parameter14Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter14.Value;" })
  parameter14Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter15.Name;" })
  parameter15Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter15.Value;" })
  parameter15Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter16.Name;" })
  parameter16Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter16.Value;" })
  parameter16Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter17.Name;" })
  parameter17Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter17.Value;" })
  parameter17Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter18.Name;" })
  parameter18Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter18.Value;" })
  parameter18Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter19.Name;" })
  parameter19Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter19.Value;" })
  parameter19Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter2.Name;" })
  parameter2Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter2.Value;" })
  parameter2Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter20.Name;" })
  parameter20Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter20.Value;" })
  parameter20Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter21.Name;" })
  parameter21Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter21.Value;" })
  parameter21Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter22.Name;" })
  parameter22Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter22.Value;" })
  parameter22Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter23.Name;" })
  parameter23Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter23.Value;" })
  parameter23Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter24.Name;" })
  parameter24Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter24.Value;" })
  parameter24Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter25.Name;" })
  parameter25Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter25.Value;" })
  parameter25Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter26.Name;" })
  parameter26Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter26.Value;" })
  parameter26Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter27.Name;" })
  parameter27Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter27.Value;" })
  parameter27Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter28.Name;" })
  parameter28Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter28.Value;" })
  parameter28Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter29.Name;" })
  parameter29Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter29.Value;" })
  parameter29Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter3.Name;" })
  parameter3Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter3.Value;" })
  parameter3Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter30.Name;" })
  parameter30Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter30.Value;" })
  parameter30Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter31.Name;" })
  parameter31Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter31.Value;" })
  parameter31Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter32.Name;" })
  parameter32Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter32.Value;" })
  parameter32Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter33.Name;" })
  parameter33Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter33.Value;" })
  parameter33Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter34.Name;" })
  parameter34Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter34.Value;" })
  parameter34Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter35.Name;" })
  parameter35Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter35.Value;" })
  parameter35Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter36.Name;" })
  parameter36Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter36.Value;" })
  parameter36Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter37.Name;" })
  parameter37Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter37.Value;" })
  parameter37Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter38.Name;" })
  parameter38Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter38.Value;" })
  parameter38Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter39.Name;" })
  parameter39Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter39.Value;" })
  parameter39Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter4.Name;" })
  parameter4Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter4.Value;" })
  parameter4Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter40.Name;" })
  parameter40Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter40.Value;" })
  parameter40Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter41.Name;" })
  parameter41Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter41.Value;" })
  parameter41Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter42.Name;" })
  parameter42Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter42.Value;" })
  parameter42Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter43.Name;" })
  parameter43Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter43.Value;" })
  parameter43Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter44.Name;" })
  parameter44Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter44.Value;" })
  parameter44Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter45.Name;" })
  parameter45Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter45.Value;" })
  parameter45Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter46.Name;" })
  parameter46Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter46.Value;" })
  parameter46Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter47.Name;" })
  parameter47Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter47.Value;" })
  parameter47Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter48.Name;" })
  parameter48Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter48.Value;" })
  parameter48Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter49.Name;" })
  parameter49Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter49.Value;" })
  parameter49Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter5.Name;" })
  parameter5Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter5.Value;" })
  parameter5Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter50.Name;" })
  parameter50Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter50.Value;" })
  parameter50Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter51.Name;" })
  parameter51Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter51.Value;" })
  parameter51Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter52.Name;" })
  parameter52Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter52.Value;" })
  parameter52Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter53.Name;" })
  parameter53Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter53.Value;" })
  parameter53Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter54.Name;" })
  parameter54Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter54.Value;" })
  parameter54Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter55.Name;" })
  parameter55Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter55.Value;" })
  parameter55Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter56.Name;" })
  parameter56Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter56.Value;" })
  parameter56Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter57.Name;" })
  parameter57Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter57.Value;" })
  parameter57Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter58.Name;" })
  parameter58Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter58.Value;" })
  parameter58Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter59.Name;" })
  parameter59Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter59.Value;" })
  parameter59Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter6.Name;" })
  parameter6Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter6.Value;" })
  parameter6Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter60.Name;" })
  parameter60Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter60.Value;" })
  parameter60Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter61.Name;" })
  parameter61Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter61.Value;" })
  parameter61Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter62.Name;" })
  parameter62Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter62.Value;" })
  parameter62Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter63.Name;" })
  parameter63Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter63.Value;" })
  parameter63Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter64.Name;" })
  parameter64Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter64.Value;" })
  parameter64Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter65.Name;" })
  parameter65Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter65.Value;" })
  parameter65Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter66.Name;" })
  parameter66Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter66.Value;" })
  parameter66Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter67.Name;" })
  parameter67Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter67.Value;" })
  parameter67Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter68.Name;" })
  parameter68Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter68.Value;" })
  parameter68Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter69.Name;" })
  parameter69Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter69.Value;" })
  parameter69Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter7.Name;" })
  parameter7Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter7.Value;" })
  parameter7Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter70.Name;" })
  parameter70Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter70.Value;" })
  parameter70Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter71.Name;" })
  parameter71Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter71.Value;" })
  parameter71Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter72.Name;" })
  parameter72Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter72.Value;" })
  parameter72Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter73.Name;" })
  parameter73Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter73.Value;" })
  parameter73Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter74.Name;" })
  parameter74Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter74.Value;" })
  parameter74Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter75.Name;" })
  parameter75Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter75.Value;" })
  parameter75Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter76.Name;" })
  parameter76Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter76.Value;" })
  parameter76Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter77.Name;" })
  parameter77Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter77.Value;" })
  parameter77Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter78.Name;" })
  parameter78Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter78.Value;" })
  parameter78Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter79.Name;" })
  parameter79Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter79.Value;" })
  parameter79Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter8.Name;" })
  parameter8Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter8.Value;" })
  parameter8Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter80.Name;" })
  parameter80Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter80.Value;" })
  parameter80Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter81.Name;" })
  parameter81Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter81.Value;" })
  parameter81Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter82.Name;" })
  parameter82Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter82.Value;" })
  parameter82Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter83.Name;" })
  parameter83Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter83.Value;" })
  parameter83Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter84.Name;" })
  parameter84Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter84.Value;" })
  parameter84Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter85.Name;" })
  parameter85Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter85.Value;" })
  parameter85Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter86.Name;" })
  parameter86Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter86.Value;" })
  parameter86Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter87.Name;" })
  parameter87Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter87.Value;" })
  parameter87Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter88.Name;" })
  parameter88Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter88.Value;" })
  parameter88Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter89.Name;" })
  parameter89Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter89.Value;" })
  parameter89Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter9.Name;" })
  parameter9Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter9.Value;" })
  parameter9Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter90.Name;" })
  parameter90Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter90.Value;" })
  parameter90Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter91.Name;" })
  parameter91Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter91.Value;" })
  parameter91Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter92.Name;" })
  parameter92Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter92.Value;" })
  parameter92Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter93.Name;" })
  parameter93Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter93.Value;" })
  parameter93Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter94.Name;" })
  parameter94Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter94.Value;" })
  parameter94Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter95.Name;" })
  parameter95Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter95.Value;" })
  parameter95Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter96.Name;" })
  parameter96Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter96.Value;" })
  parameter96Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter97.Name;" })
  parameter97Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter97.Value;" })
  parameter97Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter98.Name;" })
  parameter98Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter98.Value;" })
  parameter98Value?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter99.Name;" })
  parameter99Name?: string;

  @SpeakeasyMetadata({ data: "form, name=Parameter99.Value;" })
  parameter99Value?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Track;" })
  track?: shared.SiprecEnumTrackEnum;
}


export class CreateSiprecSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSiprecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSiprecPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSiprecCreateSiprecRequest;

  @SpeakeasyMetadata()
  security: CreateSiprecSecurity;
}


export class CreateSiprecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallSiprec?: shared.ApiV2010AccountCallSiprec;
}
