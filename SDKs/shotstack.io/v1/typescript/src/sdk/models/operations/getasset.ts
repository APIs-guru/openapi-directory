import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssetPathParams;

  @SpeakeasyMetadata()
  security: GetAssetSecurity;
}


export class GetAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetResponse?: shared.AssetResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
