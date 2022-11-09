import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCallsCountDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum GetCallsCountStatesEnum {
    Initializing = "INITIALIZING"
,    Ringing = "RINGING"
,    Active = "ACTIVE"
,    Held = "HELD"
,    RemoteHeld = "REMOTE_HELD"
}


export class GetCallsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCallsCountDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: GetCallsCountStatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class GetCallsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCallsCountQueryParams;
}


export class GetCallsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventsCount?: shared.EventsCount;

  @Metadata()
  statusCode: number;
}
