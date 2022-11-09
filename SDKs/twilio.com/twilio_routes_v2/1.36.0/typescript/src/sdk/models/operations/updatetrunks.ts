import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETRUNKS_SERVERS = [
	"https://routes.twilio.com",
];



export class UpdateTrunksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SipTrunkDomain" })
  sipTrunkDomain: string;
}


export class UpdateTrunksUpdateTrunksRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=VoiceRegion;" })
  voiceRegion?: string;
}


export class UpdateTrunksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTrunksRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTrunksPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTrunksUpdateTrunksRequest;

  @Metadata()
  security: UpdateTrunksSecurity;
}


export class UpdateTrunksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  routesV2Trunks?: shared.RoutesV2Trunks;
}
