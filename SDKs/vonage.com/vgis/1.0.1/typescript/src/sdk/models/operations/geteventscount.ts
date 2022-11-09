import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEventsCountDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum GetEventsCountStatesEnum {
    Initializing = "INITIALIZING"
,    Ringing = "RINGING"
,    Active = "ACTIVE"
,    Held = "HELD"
,    RemoteHeld = "REMOTE_HELD"
}


export class GetEventsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetEventsCountDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: GetEventsCountStatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class GetEventsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsCountQueryParams;
}


export class GetEventsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventsCount?: shared.EventsCount;

  @Metadata()
  statusCode: number;
}
