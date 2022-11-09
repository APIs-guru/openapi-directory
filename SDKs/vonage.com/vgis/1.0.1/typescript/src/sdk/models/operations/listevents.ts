import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListEventsDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum ListEventsOrderEnum {
    Desc = "DESC"
,    Asc = "ASC"
}

export enum ListEventsStatesEnum {
    Initializing = "INITIALIZING"
,    Ringing = "RINGING"
,    Active = "ACTIVE"
,    Held = "HELD"
,    RemoteHeld = "REMOTE_HELD"
,    Detached = "DETACHED"
,    Rejected = "REJECTED"
,    Cancelled = "CANCELLED"
,    Answered = "ANSWERED"
,    Missed = "MISSED"
}

export enum ListEventsTypesEnum {
    Call = "CALL"
}


export class ListEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListEventsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListEventsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ListEventsStatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: ListEventsTypesEnum;
}


export class ListEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEventsQueryParams;
}


export class ListEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  statusCode: number;
}
