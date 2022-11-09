import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHOUTGOINGCALLERID_SERVERS = [
	"https://api.twilio.com",
];



export class FetchOutgoingCallerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchOutgoingCallerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchOutgoingCallerIdRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchOutgoingCallerIdPathParams;

  @Metadata()
  security: FetchOutgoingCallerIdSecurity;
}


export class FetchOutgoingCallerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
