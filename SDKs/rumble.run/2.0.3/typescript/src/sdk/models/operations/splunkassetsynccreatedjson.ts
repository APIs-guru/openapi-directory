import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SplunkAssetSyncCreatedJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class SplunkAssetSyncCreatedJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SplunkAssetSyncCreatedJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SplunkAssetSyncCreatedJsonQueryParams;

  @Metadata()
  security: SplunkAssetSyncCreatedJsonSecurity;
}


export class SplunkAssetSyncCreatedJsonResponse extends SpeakeasyBase {
  @Metadata()
  assetsWithCheckpoint?: shared.AssetsWithCheckpoint;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
