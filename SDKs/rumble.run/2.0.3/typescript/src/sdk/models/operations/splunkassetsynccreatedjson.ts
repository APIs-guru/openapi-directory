import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SplunkAssetSyncCreatedJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class SplunkAssetSyncCreatedJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SplunkAssetSyncCreatedJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SplunkAssetSyncCreatedJsonQueryParams;

  @SpeakeasyMetadata()
  security: SplunkAssetSyncCreatedJsonSecurity;
}


export class SplunkAssetSyncCreatedJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetsWithCheckpoint?: shared.AssetsWithCheckpoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
