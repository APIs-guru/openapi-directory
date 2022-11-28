import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportsStopsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetReportsStopsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsStopsQueryParams;
}


export class GetReportsStopsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ReportStops })
  reportStops?: shared.ReportStops[];

  @SpeakeasyMetadata()
  statusCode: number;
}
