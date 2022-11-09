import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEOUTGOINGCALLERID_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateOutgoingCallerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateOutgoingCallerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateOutgoingCallerIdRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateOutgoingCallerIdPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest;

  @Metadata()
  security: UpdateOutgoingCallerIdSecurity;
}


export class UpdateOutgoingCallerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
