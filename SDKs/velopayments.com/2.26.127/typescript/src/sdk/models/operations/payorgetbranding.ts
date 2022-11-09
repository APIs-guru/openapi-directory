import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorGetBrandingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorGetBrandingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayorGetBrandingPathParams;
}


export class PayorGetBrandingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  payorBrandingResponse?: shared.PayorBrandingResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;
}
