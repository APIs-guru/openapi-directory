import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListEventsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum ListEventsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}

export enum ListEventsStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD",
    Detached = "DETACHED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED",
    Answered = "ANSWERED",
    Missed = "MISSED"
}

export enum ListEventsTypesEnum {
    Call = "CALL"
}


export class ListEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListEventsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListEventsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ListEventsStatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: ListEventsTypesEnum;
}


export class ListEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListEventsQueryParams;
}


export class ListEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  statusCode: number;
}
