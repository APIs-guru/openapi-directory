import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatementsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetStatementsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Application-Id" })
  xeroApplicationId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-User-Id" })
  xeroUserId?: string;
}


export class GetStatementsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetStatementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatementsQueryParams;

  @SpeakeasyMetadata()
  headers: GetStatementsHeaders;

  @SpeakeasyMetadata()
  security: GetStatementsSecurity;
}


export class GetStatementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statements?: shared.Statements;

  @SpeakeasyMetadata()
  statusCode: number;
}
