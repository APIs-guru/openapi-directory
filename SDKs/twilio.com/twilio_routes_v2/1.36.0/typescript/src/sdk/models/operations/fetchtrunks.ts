import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUNKS_SERVERS = [
	"https://routes.twilio.com",
];



export class FetchTrunksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SipTrunkDomain" })
  sipTrunkDomain: string;
}


export class FetchTrunksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrunksRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrunksPathParams;

  @Metadata()
  security: FetchTrunksSecurity;
}


export class FetchTrunksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  routesV2Trunks?: shared.RoutesV2Trunks;
}
