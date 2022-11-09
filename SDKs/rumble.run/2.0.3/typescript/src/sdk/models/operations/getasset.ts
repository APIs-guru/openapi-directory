import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class GetAssetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAssetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssetPathParams;

  @Metadata()
  security: GetAssetSecurity;
}


export class GetAssetResponse extends SpeakeasyBase {
  @Metadata()
  asset?: shared.Asset;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
