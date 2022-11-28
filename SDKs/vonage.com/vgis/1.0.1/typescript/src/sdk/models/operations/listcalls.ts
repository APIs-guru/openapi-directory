import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListCallsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum ListCallsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}

export enum ListCallsStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}


export class ListCallsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListCallsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListCallsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ListCallsStatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class ListCallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCallsQueryParams;
}


export class ListCallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
