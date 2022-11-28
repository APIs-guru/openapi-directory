import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateHostedNumbersHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallDelay;" })
  callDelay?: number;

  @SpeakeasyMetadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=Extension;" })
  extension?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.HostedNumberOrderEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationCode;" })
  verificationCode?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationDocumentSid;" })
  verificationDocumentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationType;" })
  verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}


export class UpdateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateHostedNumbersHostedNumberOrderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;

  @SpeakeasyMetadata()
  security: UpdateHostedNumbersHostedNumberOrderSecurity;
}


export class UpdateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
