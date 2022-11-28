import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountCredentialsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountCredentialsQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountCredentialsSecurity;
}


export class GetAccountCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Credential })
  credentials?: shared.Credential[];

  @SpeakeasyMetadata()
  statusCode: number;
}
