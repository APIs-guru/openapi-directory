import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RouteTypesGetRouteTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RouteTypesGetRouteTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RouteTypesGetRouteTypesQueryParams;
}


export class RouteTypesGetRouteTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3RouteTypesResponse?: shared.V3RouteTypesResponse;
}
