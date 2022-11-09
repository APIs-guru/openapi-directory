import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=statementID" })
  statementId: string;
}


export class GetStatementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=statementId" })
  statementId: string;
}


export class GetStatementHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetStatementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetStatementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatementPathParams;

  @Metadata()
  queryParams: GetStatementQueryParams;

  @Metadata()
  headers: GetStatementHeaders;

  @Metadata()
  security: GetStatementSecurity;
}


export class GetStatementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statement?: shared.Statement;

  @Metadata()
  statusCode: number;
}
