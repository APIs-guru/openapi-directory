import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECOMMAND_SERVERS = [
	"https://wireless.twilio.com",
];


export enum CreateCommandCreateCommandRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCommandCreateCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateCommandCreateCommandRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Command;" })
  command: string;

  @Metadata({ data: "form, name=CommandMode;" })
  commandMode?: shared.CommandEnumCommandModeEnum;

  @Metadata({ data: "form, name=DeliveryReceiptRequested;" })
  deliveryReceiptRequested?: boolean;

  @Metadata({ data: "form, name=IncludeSid;" })
  includeSid?: string;

  @Metadata({ data: "form, name=Sim;" })
  sim?: string;
}


export class CreateCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCommandCreateCommandRequest;

  @Metadata()
  security: CreateCommandSecurity;
}


export class CreateCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wirelessV1Command?: shared.WirelessV1Command;
}
