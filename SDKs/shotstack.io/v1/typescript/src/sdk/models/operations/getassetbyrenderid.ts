import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetByRenderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetByRenderIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetAssetByRenderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssetByRenderIdPathParams;

  @Metadata()
  security: GetAssetByRenderIdSecurity;
}


export class GetAssetByRenderIdResponse extends SpeakeasyBase {
  @Metadata()
  assetRenderResponse?: shared.AssetRenderResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
