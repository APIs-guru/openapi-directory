import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEORIGINATIONURL_SERVERS = [
	"https://trunking.twilio.com",
];



export class UpdateOriginationUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class UpdateOriginationUrlUpdateOriginationUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Priority;" })
  priority?: number;

  @Metadata({ data: "form, name=SipUrl;" })
  sipUrl?: string;

  @Metadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class UpdateOriginationUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateOriginationUrlRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateOriginationUrlPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateOriginationUrlUpdateOriginationUrlRequest;

  @Metadata()
  security: UpdateOriginationUrlSecurity;
}


export class UpdateOriginationUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
