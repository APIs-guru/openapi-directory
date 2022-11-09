import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorAddPayorLogoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorAddPayorLogoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayorAddPayorLogoPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: shared.PayorLogoRequest;
}


export class PayorAddPayorLogoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
