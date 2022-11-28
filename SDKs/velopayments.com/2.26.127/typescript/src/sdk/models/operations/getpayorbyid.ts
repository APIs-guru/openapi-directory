import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayorByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class GetPayorByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayorByIdPathParams;
}


export class GetPayorByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  payorV1?: shared.PayorV1;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
