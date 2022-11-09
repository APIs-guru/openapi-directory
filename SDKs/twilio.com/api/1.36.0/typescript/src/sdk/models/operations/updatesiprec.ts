import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIPREC_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateSiprecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSiprecUpdateSiprecRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.SiprecEnumUpdateStatusEnum;
}


export class UpdateSiprecSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSiprecRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSiprecPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSiprecUpdateSiprecRequest;

  @Metadata()
  security: UpdateSiprecSecurity;
}


export class UpdateSiprecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallSiprec?: shared.ApiV2010AccountCallSiprec;
}
