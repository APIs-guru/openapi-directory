import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountOrganizationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountOrganizationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountOrganizationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountOrganizationsQueryParams;

  @Metadata()
  security: GetAccountOrganizationsSecurity;
}


export class GetAccountOrganizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Organization })
  organizations?: shared.Organization[];

  @Metadata()
  statusCode: number;
}
