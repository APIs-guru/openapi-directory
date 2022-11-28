import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrganizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetOrganizationSecurity;
}


export class GetOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
