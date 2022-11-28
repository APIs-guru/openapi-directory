import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetByIdPathParams;

  @SpeakeasyMetadata()
  headers: GetAssetByIdHeaders;

  @SpeakeasyMetadata()
  security: GetAssetByIdSecurity;
}


export class GetAssetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
