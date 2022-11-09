import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportsEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=type" })
  type?: string[];
}


export class GetReportsEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportsEventsQueryParams;
}


export class GetReportsEventsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  statusCode: number;
}
