import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStatementsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateStatementsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateStatementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateStatementsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Statements;

  @SpeakeasyMetadata()
  security: CreateStatementsSecurity;
}


export class CreateStatementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statements?: shared.Statements;

  @SpeakeasyMetadata()
  statusCode: number;
}
