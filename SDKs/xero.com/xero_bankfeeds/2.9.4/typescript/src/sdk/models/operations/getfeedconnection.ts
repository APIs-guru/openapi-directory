import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeedConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFeedConnectionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetFeedConnectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFeedConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeedConnectionPathParams;

  @SpeakeasyMetadata()
  headers: GetFeedConnectionHeaders;

  @SpeakeasyMetadata()
  security: GetFeedConnectionSecurity;
}


export class GetFeedConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  feedConnection?: shared.FeedConnection;

  @SpeakeasyMetadata()
  statusCode: number;
}
