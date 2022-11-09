import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisruptionsGetDisruptionsByRouteAndStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum {
    Current = "current"
,    Planned = "planned"
}


export class DisruptionsGetDisruptionsByRouteAndStopQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByRouteAndStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisruptionsGetDisruptionsByRouteAndStopPathParams;

  @Metadata()
  queryParams: DisruptionsGetDisruptionsByRouteAndStopQueryParams;
}


export class DisruptionsGetDisruptionsByRouteAndStopResponse extends SpeakeasyBase {
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
