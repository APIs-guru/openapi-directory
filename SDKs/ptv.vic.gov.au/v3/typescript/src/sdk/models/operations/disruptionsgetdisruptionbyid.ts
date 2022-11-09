import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisruptionsGetDisruptionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=disruption_id" })
  disruptionId: number;
}


export class DisruptionsGetDisruptionByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisruptionsGetDisruptionByIdPathParams;

  @Metadata()
  queryParams: DisruptionsGetDisruptionByIdQueryParams;
}


export class DisruptionsGetDisruptionByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DisruptionResponse?: shared.V3DisruptionResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
