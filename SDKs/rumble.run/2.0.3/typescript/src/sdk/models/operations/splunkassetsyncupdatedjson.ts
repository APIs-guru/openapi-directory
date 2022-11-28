import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SplunkAssetSyncUpdatedJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class SplunkAssetSyncUpdatedJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class SplunkAssetSyncUpdatedJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SplunkAssetSyncUpdatedJsonQueryParams;

  @SpeakeasyMetadata()
  security: SplunkAssetSyncUpdatedJsonSecurity;
}


export class SplunkAssetSyncUpdatedJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetsWithCheckpoint?: shared.AssetsWithCheckpoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
