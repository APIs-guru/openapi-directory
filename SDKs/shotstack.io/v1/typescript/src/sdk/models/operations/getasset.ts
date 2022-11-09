import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetAssetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssetPathParams;

  @Metadata()
  security: GetAssetSecurity;
}


export class GetAssetResponse extends SpeakeasyBase {
  @Metadata()
  assetResponse?: shared.AssetResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
