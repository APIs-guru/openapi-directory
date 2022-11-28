import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIpCommandServerList = [
	"https://supersim.twilio.com",
] as const;

export enum CreateIpCommandCreateIpCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateIpCommandCreateIpCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=DevicePort;" })
  devicePort: number;

  @SpeakeasyMetadata({ data: "form, name=Payload;" })
  payload: string;

  @SpeakeasyMetadata({ data: "form, name=PayloadType;" })
  payloadType?: shared.IpCommandEnumPayloadTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=Sim;" })
  sim: string;
}


export class CreateIpCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpCommandCreateIpCommandRequest;

  @SpeakeasyMetadata()
  security: CreateIpCommandSecurity;
}


export class CreateIpCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
