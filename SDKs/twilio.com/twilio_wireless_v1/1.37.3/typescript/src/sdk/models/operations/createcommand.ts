import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCommandServerList = [
	"https://wireless.twilio.com",
] as const;

export enum CreateCommandCreateCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCommandCreateCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateCommandCreateCommandRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Command;" })
  command: string;

  @SpeakeasyMetadata({ data: "form, name=CommandMode;" })
  commandMode?: shared.CommandEnumCommandModeEnum;

  @SpeakeasyMetadata({ data: "form, name=DeliveryReceiptRequested;" })
  deliveryReceiptRequested?: boolean;

  @SpeakeasyMetadata({ data: "form, name=IncludeSid;" })
  includeSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Sim;" })
  sim?: string;
}


export class CreateCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCommandCreateCommandRequest;

  @SpeakeasyMetadata()
  security: CreateCommandSecurity;
}


export class CreateCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wirelessV1Command?: shared.WirelessV1Command;
}
