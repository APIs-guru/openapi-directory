import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEndpointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=openapi" })
  openapi?: boolean;
}


export class GetEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEndpointsQueryParams;
}


export class GetEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpoint?: shared.Endpoint;
}
