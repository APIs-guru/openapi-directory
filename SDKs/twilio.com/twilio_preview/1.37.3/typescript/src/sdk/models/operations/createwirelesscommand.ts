import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWirelessCommandServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateWirelessCommandCreateWirelessCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Command;" })
  command: string;

  @SpeakeasyMetadata({ data: "form, name=CommandMode;" })
  commandMode?: string;

  @SpeakeasyMetadata({ data: "form, name=Device;" })
  device?: string;

  @SpeakeasyMetadata({ data: "form, name=IncludeSid;" })
  includeSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Sim;" })
  sim?: string;
}


export class CreateWirelessCommandSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWirelessCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWirelessCommandCreateWirelessCommandRequest;

  @SpeakeasyMetadata()
  security: CreateWirelessCommandSecurity;
}


export class CreateWirelessCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewWirelessCommand?: shared.PreviewWirelessCommand;
}
