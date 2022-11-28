import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWirelessLaNsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetWirelessLaNsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetWirelessLaNsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWirelessLaNsQueryParams;

  @SpeakeasyMetadata()
  security: GetWirelessLaNsSecurity;
}


export class GetWirelessLaNsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Wireless })
  wirelesses?: shared.Wireless[];
}
