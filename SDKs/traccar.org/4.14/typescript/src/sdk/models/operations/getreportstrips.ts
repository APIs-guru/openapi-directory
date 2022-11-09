import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportsTripsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsTripsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportsTripsQueryParams;
}


export class GetReportsTripsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ReportTrips })
  reportTrips?: shared.ReportTrips[];

  @Metadata()
  statusCode: number;
}
