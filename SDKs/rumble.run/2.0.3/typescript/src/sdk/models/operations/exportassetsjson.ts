import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAssetsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAssetsJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportAssetsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAssetsJsonQueryParams;

  @SpeakeasyMetadata()
  security: ExportAssetsJsonSecurity;
}


export class ExportAssetsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Asset })
  assets?: shared.Asset[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
