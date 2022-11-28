import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisruptionsGetDisruptionsByRouteAndStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}


export class DisruptionsGetDisruptionsByRouteAndStopQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByRouteAndStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisruptionsGetDisruptionsByRouteAndStopPathParams;

  @SpeakeasyMetadata()
  queryParams: DisruptionsGetDisruptionsByRouteAndStopQueryParams;
}


export class DisruptionsGetDisruptionsByRouteAndStopResponse extends SpeakeasyBase {
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
