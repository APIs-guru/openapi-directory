import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSmsCommandServerList = [
	"https://supersim.twilio.com",
] as const;

export enum CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateSmsCommandCreateSmsCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Payload;" })
  payload: string;

  @SpeakeasyMetadata({ data: "form, name=Sim;" })
  sim: string;
}


export class CreateSmsCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSmsCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSmsCommandCreateSmsCommandRequest;

  @SpeakeasyMetadata()
  security: CreateSmsCommandSecurity;
}


export class CreateSmsCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
