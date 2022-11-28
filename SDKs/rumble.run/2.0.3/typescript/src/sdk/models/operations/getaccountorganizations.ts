import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountOrganizationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountOrganizationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountOrganizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountOrganizationsQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountOrganizationsSecurity;
}


export class GetAccountOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Organization })
  organizations?: shared.Organization[];

  @SpeakeasyMetadata()
  statusCode: number;
}
