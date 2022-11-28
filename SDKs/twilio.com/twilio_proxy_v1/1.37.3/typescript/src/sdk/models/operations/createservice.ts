import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceServerList = [
	"https://proxy.twilio.com",
] as const;


export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
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
  uniqueName: string;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @SpeakeasyMetadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1Service?: shared.ProxyV1Service;
}
