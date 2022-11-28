import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisruptionsGetDisruptionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disruption_id" })
  disruptionId: number;
}


export class DisruptionsGetDisruptionByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisruptionsGetDisruptionByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DisruptionsGetDisruptionByIdQueryParams;
}


export class DisruptionsGetDisruptionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3DisruptionResponse?: shared.V3DisruptionResponse;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
