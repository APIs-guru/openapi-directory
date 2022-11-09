import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2LocationsLocationIdRefundsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class GetV2LocationsLocationIdRefundsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;
}


export class GetV2LocationsLocationIdRefundsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetV2LocationsLocationIdRefundsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV2LocationsLocationIdRefundsPathParams;

  @Metadata()
  queryParams: GetV2LocationsLocationIdRefundsQueryParams;

  @Metadata()
  security: GetV2LocationsLocationIdRefundsSecurity;
}


export class GetV2LocationsLocationIdRefundsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRefundsResponse?: shared.ListRefundsResponse;

  @Metadata()
  statusCode: number;
}
