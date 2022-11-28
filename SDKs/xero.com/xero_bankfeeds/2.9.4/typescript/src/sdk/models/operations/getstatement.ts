import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementID" })
  statementId: string;
}


export class GetStatementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statementId" })
  statementId: string;
}


export class GetStatementHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetStatementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatementPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStatementQueryParams;

  @SpeakeasyMetadata()
  headers: GetStatementHeaders;

  @SpeakeasyMetadata()
  security: GetStatementSecurity;
}


export class GetStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statement?: shared.Statement;

  @SpeakeasyMetadata()
  statusCode: number;
}
