import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBINDING_SERVERS = [
	"https://notify.twilio.com",
];



export class CreateBindingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBindingCreateBindingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Address;" })
  address: string;

  @Metadata({ data: "form, name=BindingType;" })
  bindingType: shared.BindingEnumBindingTypeEnum;

  @Metadata({ data: "form, name=CredentialSid;" })
  credentialSid?: string;

  @Metadata({ data: "form, name=Endpoint;" })
  endpoint?: string;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=NotificationProtocolVersion;" })
  notificationProtocolVersion?: string;

  @Metadata({ data: "form, name=Tag;" })
  tag?: string[];
}


export class CreateBindingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBindingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateBindingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBindingCreateBindingRequest;

  @Metadata()
  security: CreateBindingSecurity;
}


export class CreateBindingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
