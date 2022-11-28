import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class GetAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetPathParams;

  @SpeakeasyMetadata()
  security: GetAssetSecurity;
}


export class GetAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
