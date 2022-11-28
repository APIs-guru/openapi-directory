import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEndpointsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=openapi" })
  openapi?: boolean;
}


export class GetEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEndpointsQueryParams;
}


export class GetEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpoint?: shared.Endpoint;
}
