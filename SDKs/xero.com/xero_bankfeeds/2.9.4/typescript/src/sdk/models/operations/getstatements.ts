import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatementsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetStatementsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Application-Id" })
  xeroApplicationId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Xero-User-Id" })
  xeroUserId?: string;
}


export class GetStatementsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetStatementsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStatementsQueryParams;

  @Metadata()
  headers: GetStatementsHeaders;

  @Metadata()
  security: GetStatementsSecurity;
}


export class GetStatementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statements?: shared.Statements;

  @Metadata()
  statusCode: number;
}
