import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DirectionsForDirectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=direction_id" })
  directionId: number;
}


export class DirectionsForDirectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DirectionsForDirectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DirectionsForDirectionPathParams;

  @SpeakeasyMetadata()
  queryParams: DirectionsForDirectionQueryParams;
}


export class DirectionsForDirectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3DirectionsResponse?: shared.V3DirectionsResponse;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
