import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
  serviceId: string;
}


export class GetServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServicePathParams;

  @Metadata()
  security: GetServiceSecurity;
}


export class GetServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  service?: shared.Service;

  @Metadata()
  statusCode: number;
}
