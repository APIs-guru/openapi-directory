import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssetCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class UpdateAssetCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAssetCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssetCommentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetComments;

  @SpeakeasyMetadata()
  security: UpdateAssetCommentsSecurity;
}


export class UpdateAssetCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
