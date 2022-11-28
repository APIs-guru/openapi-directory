import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class RemoveAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAssetPathParams;

  @SpeakeasyMetadata()
  security: RemoveAssetSecurity;
}


export class RemoveAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
