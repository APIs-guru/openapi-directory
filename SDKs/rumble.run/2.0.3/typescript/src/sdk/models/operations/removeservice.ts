import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
  serviceId: string;
}


export class RemoveServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveServicePathParams;

  @SpeakeasyMetadata()
  security: RemoveServiceSecurity;
}


export class RemoveServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
