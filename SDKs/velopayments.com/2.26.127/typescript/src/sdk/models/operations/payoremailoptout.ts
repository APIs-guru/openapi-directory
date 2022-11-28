import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PayorEmailOptOutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorEmailOptOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PayorEmailOptOutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayorEmailOptOutRequest;
}


export class PayorEmailOptOutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
