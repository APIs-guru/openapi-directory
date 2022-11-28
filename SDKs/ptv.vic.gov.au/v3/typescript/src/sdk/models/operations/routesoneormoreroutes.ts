import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoutesOneOrMoreRoutesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_name" })
  routeName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RoutesOneOrMoreRoutesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RoutesOneOrMoreRoutesQueryParams;
}


export class RoutesOneOrMoreRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3RouteResponse?: shared.V3RouteResponse;
}
