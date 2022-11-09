import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEORIGINATIONURL_SERVERS = [
	"https://trunking.twilio.com",
];



export class CreateOriginationUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreateOriginationUrlCreateOriginationUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Enabled;" })
  enabled: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Priority;" })
  priority: number;

  @Metadata({ data: "form, name=SipUrl;" })
  sipUrl: string;

  @Metadata({ data: "form, name=Weight;" })
  weight: number;
}


export class CreateOriginationUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateOriginationUrlRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateOriginationUrlPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateOriginationUrlCreateOriginationUrlRequest;

  @Metadata()
  security: CreateOriginationUrlSecurity;
}


export class CreateOriginationUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
