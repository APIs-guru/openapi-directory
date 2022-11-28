import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetEventsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum GetEventsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}


export class GetEventsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetEventsCountDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: GetEventsCountStatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class GetEventsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsCountQueryParams;
}


export class GetEventsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  eventsCount?: shared.EventsCount;

  @SpeakeasyMetadata()
  statusCode: number;
}
