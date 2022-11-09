import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveAccountOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class RemoveAccountOrganizationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAccountOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveAccountOrganizationPathParams;

  @Metadata()
  security: RemoveAccountOrganizationSecurity;
}


export class RemoveAccountOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
