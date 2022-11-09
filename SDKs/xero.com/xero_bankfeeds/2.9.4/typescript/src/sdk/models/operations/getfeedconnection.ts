import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFeedConnectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFeedConnectionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetFeedConnectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFeedConnectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFeedConnectionPathParams;

  @Metadata()
  headers: GetFeedConnectionHeaders;

  @Metadata()
  security: GetFeedConnectionSecurity;
}


export class GetFeedConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  feedConnection?: shared.FeedConnection;

  @Metadata()
  statusCode: number;
}
