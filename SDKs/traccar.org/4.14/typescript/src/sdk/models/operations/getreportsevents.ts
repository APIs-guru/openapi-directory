import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportsEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=type" })
  type?: string[];
}


export class GetReportsEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportsEventsQueryParams;
}


export class GetReportsEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  statusCode: number;
}
