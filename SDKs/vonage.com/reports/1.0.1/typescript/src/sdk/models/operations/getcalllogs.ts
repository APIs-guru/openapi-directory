import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCallLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}

export enum GetCallLogsDirectionEnum {
    Inbound = "Inbound"
,    Outbound = "Outbound"
}


export class GetCallLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destination_user" })
  destinationUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCallLogsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end:gte" })
  endGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end:lte" })
  endLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source_user" })
  sourceUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start:gte" })
  startGte: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start:lte" })
  startLte: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class GetCallLogsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCallLogsPathParams;

  @Metadata()
  queryParams: GetCallLogsQueryParams;

  @Metadata()
  security: GetCallLogsSecurity;
}


export class GetCallLogsResponse extends SpeakeasyBase {
  @Metadata()
  callLogsHalResponse?: shared.CallLogsHalResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
