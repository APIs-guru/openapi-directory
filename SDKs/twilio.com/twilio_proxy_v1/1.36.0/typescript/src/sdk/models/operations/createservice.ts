import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICE_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=ChatInstanceSid;" })
  chatInstanceSid?: string;

  @Metadata({ data: "form, name=DefaultTtl;" })
  defaultTtl?: number;

  @Metadata({ data: "form, name=GeoMatchLevel;" })
  geoMatchLevel?: shared.ServiceEnumGeoMatchLevelEnum;

  @Metadata({ data: "form, name=InterceptCallbackUrl;" })
  interceptCallbackUrl?: string;

  @Metadata({ data: "form, name=NumberSelectionBehavior;" })
  numberSelectionBehavior?: shared.ServiceEnumNumberSelectionBehaviorEnum;

  @Metadata({ data: "form, name=OutOfSessionCallbackUrl;" })
  outOfSessionCallbackUrl?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @Metadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1Service?: shared.ProxyV1Service;
}
