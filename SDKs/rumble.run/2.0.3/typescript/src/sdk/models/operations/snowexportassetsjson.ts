import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SnowExportAssetsJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SnowExportAssetsJsonRequest extends SpeakeasyBase {
  @Metadata()
  security: SnowExportAssetsJsonSecurity;
}


export class SnowExportAssetsJsonResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssetServiceNow })
  assetServiceNows?: shared.AssetServiceNow[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
