import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListCallsDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum ListCallsOrderEnum {
    Desc = "DESC"
,    Asc = "ASC"
}

export enum ListCallsStatesEnum {
    Initializing = "INITIALIZING"
,    Ringing = "RINGING"
,    Active = "ACTIVE"
,    Held = "HELD"
,    RemoteHeld = "REMOTE_HELD"
}


export class ListCallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListCallsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListCallsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: ListCallsStatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: number;
}


export class ListCallsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCallsQueryParams;
}


export class ListCallsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
