import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetByRenderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetByRenderIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetAssetByRenderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetByRenderIdPathParams;

  @SpeakeasyMetadata()
  security: GetAssetByRenderIdSecurity;
}


export class GetAssetByRenderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetRenderResponse?: shared.AssetRenderResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
