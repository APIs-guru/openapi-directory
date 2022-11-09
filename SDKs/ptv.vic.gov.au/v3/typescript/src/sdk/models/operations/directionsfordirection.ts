import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectionsForDirectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=direction_id" })
  directionId: number;
}


export class DirectionsForDirectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DirectionsForDirectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectionsForDirectionPathParams;

  @Metadata()
  queryParams: DirectionsForDirectionQueryParams;
}


export class DirectionsForDirectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DirectionsResponse?: shared.V3DirectionsResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
