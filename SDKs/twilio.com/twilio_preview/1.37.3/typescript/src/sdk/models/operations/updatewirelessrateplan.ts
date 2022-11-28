import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateWirelessRatePlanServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateWirelessRatePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateWirelessRatePlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWirelessRatePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateWirelessRatePlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWirelessRatePlanUpdateWirelessRatePlanRequest;

  @SpeakeasyMetadata()
  security: UpdateWirelessRatePlanSecurity;
}


export class UpdateWirelessRatePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
