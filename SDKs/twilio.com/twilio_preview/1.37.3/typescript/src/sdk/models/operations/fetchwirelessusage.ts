import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWirelessUsageServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchWirelessUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class FetchWirelessUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=End" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Start" })
  start?: string;
}


export class FetchWirelessUsageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWirelessUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWirelessUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWirelessUsageQueryParams;

  @SpeakeasyMetadata()
  security: FetchWirelessUsageSecurity;
}


export class FetchWirelessUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewWirelessSimUsage?: shared.PreviewWirelessSimUsage;
}
