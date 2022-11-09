import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallDelay;" })
  callDelay?: number;

  @Metadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=Extension;" })
  extension?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.HostedNumberOrderEnumStatusEnum;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=VerificationCode;" })
  verificationCode?: string;

  @Metadata({ data: "form, name=VerificationDocumentSid;" })
  verificationDocumentSid?: string;

  @Metadata({ data: "form, name=VerificationType;" })
  verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}


export class UpdateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateHostedNumbersHostedNumberOrderPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;

  @Metadata()
  security: UpdateHostedNumbersHostedNumberOrderSecurity;
}


export class UpdateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
