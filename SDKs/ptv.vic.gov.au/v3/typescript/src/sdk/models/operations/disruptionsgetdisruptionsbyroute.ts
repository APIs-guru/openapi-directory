import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisruptionsGetDisruptionsByRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;
}

export enum DisruptionsGetDisruptionsByRouteDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}


export class DisruptionsGetDisruptionsByRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisruptionsGetDisruptionsByRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: DisruptionsGetDisruptionsByRouteQueryParams;
}


export class DisruptionsGetDisruptionsByRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3DisruptionsResponse?: shared.V3DisruptionsResponse;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
