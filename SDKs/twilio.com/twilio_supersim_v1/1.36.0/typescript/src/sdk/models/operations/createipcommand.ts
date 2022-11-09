import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEIPCOMMAND_SERVERS = [
	"https://supersim.twilio.com",
];


export enum CreateIpCommandCreateIpCommandRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateIpCommandCreateIpCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=DevicePort;" })
  devicePort: number;

  @Metadata({ data: "form, name=Payload;" })
  payload: string;

  @Metadata({ data: "form, name=PayloadType;" })
  payloadType?: shared.IpCommandEnumPayloadTypeEnum;

  @Metadata({ data: "form, name=Sim;" })
  sim: string;
}


export class CreateIpCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpCommandCreateIpCommandRequest;

  @Metadata()
  security: CreateIpCommandSecurity;
}


export class CreateIpCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
