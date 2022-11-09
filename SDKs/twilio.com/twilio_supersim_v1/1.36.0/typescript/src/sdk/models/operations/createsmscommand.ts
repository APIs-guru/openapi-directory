import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESMSCOMMAND_SERVERS = [
	"https://supersim.twilio.com",
];


export enum CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateSmsCommandCreateSmsCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Payload;" })
  payload: string;

  @Metadata({ data: "form, name=Sim;" })
  sim: string;
}


export class CreateSmsCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSmsCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSmsCommandCreateSmsCommandRequest;

  @Metadata()
  security: CreateSmsCommandSecurity;
}


export class CreateSmsCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
