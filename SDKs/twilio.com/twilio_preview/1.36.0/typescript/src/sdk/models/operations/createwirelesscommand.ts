import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWIRELESSCOMMAND_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateWirelessCommandCreateWirelessCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: string;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Command;" })
  command: string;

  @Metadata({ data: "form, name=CommandMode;" })
  commandMode?: string;

  @Metadata({ data: "form, name=Device;" })
  device?: string;

  @Metadata({ data: "form, name=IncludeSid;" })
  includeSid?: string;

  @Metadata({ data: "form, name=Sim;" })
  sim?: string;
}


export class CreateWirelessCommandSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWirelessCommandRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWirelessCommandCreateWirelessCommandRequest;

  @Metadata()
  security: CreateWirelessCommandSecurity;
}


export class CreateWirelessCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewWirelessCommand?: shared.PreviewWirelessCommand;
}
