import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssetTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class UpdateAssetTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAssetTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssetTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssetTags;

  @Metadata()
  security: UpdateAssetTagsSecurity;
}


export class UpdateAssetTagsResponse extends SpeakeasyBase {
  @Metadata()
  asset?: shared.Asset;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
