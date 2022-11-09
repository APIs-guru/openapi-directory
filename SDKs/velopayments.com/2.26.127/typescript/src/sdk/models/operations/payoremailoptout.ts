import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorEmailOptOutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorEmailOptOutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayorEmailOptOutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayorEmailOptOutRequest;
}


export class PayorEmailOptOutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;
}
