import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoutesOneOrMoreRoutesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=route_name" })
  routeName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RoutesOneOrMoreRoutesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RoutesOneOrMoreRoutesQueryParams;
}


export class RoutesOneOrMoreRoutesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3RouteResponse?: shared.V3RouteResponse;
}
