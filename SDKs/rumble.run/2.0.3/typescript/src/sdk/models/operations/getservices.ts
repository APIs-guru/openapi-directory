import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetServicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetServicesQueryParams;

  @SpeakeasyMetadata()
  security: GetServicesSecurity;
}


export class GetServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Service })
  services?: shared.Service[];

  @SpeakeasyMetadata()
  statusCode: number;
}
