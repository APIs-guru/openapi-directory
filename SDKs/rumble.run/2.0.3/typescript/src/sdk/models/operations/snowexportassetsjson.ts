import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SnowExportAssetsJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportAssetsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SnowExportAssetsJsonSecurity;
}


export class SnowExportAssetsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssetServiceNow })
  assetServiceNows?: shared.AssetServiceNow[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
