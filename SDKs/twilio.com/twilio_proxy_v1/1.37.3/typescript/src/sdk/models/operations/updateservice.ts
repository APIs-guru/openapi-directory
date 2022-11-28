import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceServerList = [
	"https://proxy.twilio.com",
] as const;


export class UpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=ChatInstanceSid;" })
  chatInstanceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultTtl;" })
  defaultTtl?: number;

  @SpeakeasyMetadata({ data: "form, name=GeoMatchLevel;" })
  geoMatchLevel?: shared.ServiceEnumGeoMatchLevelEnum;

  @SpeakeasyMetadata({ data: "form, name=InterceptCallbackUrl;" })
  interceptCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=NumberSelectionBehavior;" })
  numberSelectionBehavior?: shared.ServiceEnumNumberSelectionBehaviorEnum;

  @SpeakeasyMetadata({ data: "form, name=OutOfSessionCallbackUrl;" })
  outOfSessionCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1Service?: shared.ProxyV1Service;
}
