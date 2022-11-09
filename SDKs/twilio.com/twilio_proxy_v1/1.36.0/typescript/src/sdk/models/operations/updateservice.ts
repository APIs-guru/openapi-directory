import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICE_SERVERS = [
	"https://proxy.twilio.com",
];



export class UpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
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
  uniqueName?: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @Metadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1Service?: shared.ProxyV1Service;
}
