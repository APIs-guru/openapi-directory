import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBindingServerList = [
	"https://notify.twilio.com",
] as const;


export class CreateBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBindingCreateBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Address;" })
  address: string;

  @SpeakeasyMetadata({ data: "form, name=BindingType;" })
  bindingType: shared.BindingEnumBindingTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=CredentialSid;" })
  credentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Endpoint;" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=NotificationProtocolVersion;" })
  notificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=Tag;" })
  tag?: string[];
}


export class CreateBindingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateBindingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBindingCreateBindingRequest;

  @SpeakeasyMetadata()
  security: CreateBindingSecurity;
}


export class CreateBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
