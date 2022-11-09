import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class UpdateAssetCommentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAssetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssetCommentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetComments;

  @Metadata()
  security: UpdateAssetCommentsSecurity;
}


export class UpdateAssetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  asset?: shared.Asset;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
