import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class GetAccountOrganizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountOrganizationPathParams;

  @SpeakeasyMetadata()
  security: GetAccountOrganizationSecurity;
}


export class GetAccountOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
