import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteAssetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class DeleteAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAssetPathParams;

  @SpeakeasyMetadata()
  security: DeleteAssetSecurity;
}


export class DeleteAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
