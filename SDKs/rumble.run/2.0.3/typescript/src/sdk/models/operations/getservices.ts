import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetServicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServicesQueryParams;

  @Metadata()
  security: GetServicesSecurity;
}


export class GetServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Service })
  services?: shared.Service[];

  @Metadata()
  statusCode: number;
}
