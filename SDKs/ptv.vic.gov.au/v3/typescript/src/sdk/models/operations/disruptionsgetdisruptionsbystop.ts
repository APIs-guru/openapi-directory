import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisruptionsGetDisruptionsByStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DisruptionsGetDisruptionsByStopDisruptionStatusEnum {
    Current = "current"
,    Planned = "planned"
}


export class DisruptionsGetDisruptionsByStopQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disruption_status" })
  disruptionStatus?: DisruptionsGetDisruptionsByStopDisruptionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionsByStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisruptionsGetDisruptionsByStopPathParams;

  @Metadata()
  queryParams: DisruptionsGetDisruptionsByStopQueryParams;
}


export class DisruptionsGetDisruptionsByStopResponse extends SpeakeasyBase {
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
