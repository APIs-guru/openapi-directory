import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWIRELESSUSAGE_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchWirelessUsagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class FetchWirelessUsageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=End" })
  end?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Start" })
  start?: string;
}


export class FetchWirelessUsageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWirelessUsageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWirelessUsagePathParams;

  @Metadata()
  queryParams: FetchWirelessUsageQueryParams;

  @Metadata()
  security: FetchWirelessUsageSecurity;
}


export class FetchWirelessUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewWirelessSimUsage?: shared.PreviewWirelessSimUsage;
}
