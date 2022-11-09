import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAssetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAssetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssetsQueryParams;

  @Metadata()
  security: GetAssetsSecurity;
}


export class GetAssetsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Asset })
  assets?: shared.Asset[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
