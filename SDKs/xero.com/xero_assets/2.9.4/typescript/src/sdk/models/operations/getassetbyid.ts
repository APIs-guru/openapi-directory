import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssetByIdPathParams;

  @Metadata()
  headers: GetAssetByIdHeaders;

  @Metadata()
  security: GetAssetByIdSecurity;
}


export class GetAssetByIdResponse extends SpeakeasyBase {
  @Metadata()
  asset?: shared.Asset;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
