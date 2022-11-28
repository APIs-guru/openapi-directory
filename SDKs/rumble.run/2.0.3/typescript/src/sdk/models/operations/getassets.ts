import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAssetsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssetsQueryParams;

  @SpeakeasyMetadata()
  security: GetAssetsSecurity;
}


export class GetAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Asset })
  assets?: shared.Asset[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
