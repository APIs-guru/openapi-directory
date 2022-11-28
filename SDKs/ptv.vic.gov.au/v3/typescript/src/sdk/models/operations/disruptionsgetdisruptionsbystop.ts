import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisruptionsGetDisruptionsByStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DisruptionsGetDisruptionsByStopDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}


export class DisruptionsGetDisruptionsByStopQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByStopDisruptionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisruptionsGetDisruptionsByStopPathParams;

  @SpeakeasyMetadata()
  queryParams: DisruptionsGetDisruptionsByStopQueryParams;
}


export class DisruptionsGetDisruptionsByStopResponse extends SpeakeasyBase {
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
