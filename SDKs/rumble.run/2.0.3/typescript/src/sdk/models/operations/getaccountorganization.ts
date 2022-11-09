import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class GetAccountOrganizationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountOrganizationPathParams;

  @Metadata()
  security: GetAccountOrganizationSecurity;
}


export class GetAccountOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
