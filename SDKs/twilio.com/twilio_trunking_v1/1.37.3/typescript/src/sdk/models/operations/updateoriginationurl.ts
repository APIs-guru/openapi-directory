import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateOriginationUrlServerList = [
	"https://trunking.twilio.com",
] as const;


export class UpdateOriginationUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class UpdateOriginationUrlUpdateOriginationUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: number;

  @SpeakeasyMetadata({ data: "form, name=SipUrl;" })
  sipUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class UpdateOriginationUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateOriginationUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateOriginationUrlPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateOriginationUrlUpdateOriginationUrlRequest;

  @SpeakeasyMetadata()
  security: UpdateOriginationUrlSecurity;
}


export class UpdateOriginationUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
