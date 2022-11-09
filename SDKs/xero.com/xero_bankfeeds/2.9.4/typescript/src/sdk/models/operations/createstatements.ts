import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStatementsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateStatementsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateStatementsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStatementsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Statements;

  @Metadata()
  security: CreateStatementsSecurity;
}


export class CreateStatementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statements?: shared.Statements;

  @Metadata()
  statusCode: number;
}
