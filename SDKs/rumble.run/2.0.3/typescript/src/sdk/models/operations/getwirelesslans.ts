import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWirelessLaNsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetWirelessLaNsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetWirelessLaNsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWirelessLaNsQueryParams;

  @Metadata()
  security: GetWirelessLaNsSecurity;
}


export class GetWirelessLaNsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Wireless })
  wirelesses?: shared.Wireless[];
}
