import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssetTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;
}


export class UpdateAssetTagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAssetTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssetTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssetTags;

  @SpeakeasyMetadata()
  security: UpdateAssetTagsSecurity;
}


export class UpdateAssetTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: shared.Asset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
