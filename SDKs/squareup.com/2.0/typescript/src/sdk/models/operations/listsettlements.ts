import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSettlementsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class ListSettlementsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batch_token" })
  batchToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class ListSettlementsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListSettlementsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListSettlementsPathParams;

  @Metadata()
  queryParams: ListSettlementsQueryParams;

  @Metadata()
  security: ListSettlementsSecurity;
}


export class ListSettlementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.V1Settlement })
  v1Settlements?: shared.V1Settlement[];
}
