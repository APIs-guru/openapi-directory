import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountCredentialsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountCredentialsQueryParams;

  @Metadata()
  security: GetAccountCredentialsSecurity;
}


export class GetAccountCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Credential })
  credentials?: shared.Credential[];

  @Metadata()
  statusCode: number;
}
