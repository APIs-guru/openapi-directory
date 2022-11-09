import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOrdersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class ListOrdersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batch_token" })
  batchToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;
}


export class ListOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListOrdersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListOrdersPathParams;

  @Metadata()
  queryParams: ListOrdersQueryParams;

  @Metadata()
  security: ListOrdersSecurity;
}


export class ListOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.V1Order })
  v1Orders?: shared.V1Order[];
}
