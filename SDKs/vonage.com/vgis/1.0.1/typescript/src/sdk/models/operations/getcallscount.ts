import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCallsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum GetCallsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}


export class GetCallsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCallsCountDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: GetCallsCountStatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class GetCallsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCallsCountQueryParams;
}


export class GetCallsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  eventsCount?: shared.EventsCount;

  @SpeakeasyMetadata()
  statusCode: number;
}
