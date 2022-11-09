import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEASSET_SERVERS = [
	"https://serverless.twilio.com",
];



export class UpdateAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateAssetUpdateAssetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class UpdateAssetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAssetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateAssetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAssetUpdateAssetRequest;

  @Metadata()
  security: UpdateAssetSecurity;
}


export class UpdateAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
