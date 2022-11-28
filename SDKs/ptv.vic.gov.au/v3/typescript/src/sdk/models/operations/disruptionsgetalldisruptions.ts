import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DisruptionsGetAllDisruptionsDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}


export class DisruptionsGetAllDisruptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_modes" })
  disruptionModes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetAllDisruptionsDisruptionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetAllDisruptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DisruptionsGetAllDisruptionsQueryParams;
}


export class DisruptionsGetAllDisruptionsResponse extends SpeakeasyBase {
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
