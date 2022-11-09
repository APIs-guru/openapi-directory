import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisruptionsGetDisruptionsByRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;
}

export enum DisruptionsGetDisruptionsByRouteDisruptionStatusEnum {
    Current = "current"
,    Planned = "planned"
}


export class DisruptionsGetDisruptionsByRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisruptionsGetDisruptionsByRoutePathParams;

  @Metadata()
  queryParams: DisruptionsGetDisruptionsByRouteQueryParams;
}


export class DisruptionsGetDisruptionsByRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DisruptionsResponse?: shared.V3DisruptionsResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
