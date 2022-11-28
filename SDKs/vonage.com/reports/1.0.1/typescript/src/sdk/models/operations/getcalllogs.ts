import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCallLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}

export enum GetCallLogsDirectionEnum {
    Inbound = "Inbound",
    Outbound = "Outbound"
}


export class GetCallLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination_user" })
  destinationUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCallLogsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end:gte" })
  endGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end:lte" })
  endLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source_user" })
  sourceUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start:gte" })
  startGte: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start:lte" })
  startLte: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class GetCallLogsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCallLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCallLogsQueryParams;

  @SpeakeasyMetadata()
  security: GetCallLogsSecurity;
}


export class GetCallLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callLogsHalResponse?: shared.CallLogsHalResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
