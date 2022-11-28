import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportsTripsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsTripsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsTripsQueryParams;
}


export class GetReportsTripsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ReportTrips })
  reportTrips?: shared.ReportTrips[];

  @SpeakeasyMetadata()
  statusCode: number;
}
