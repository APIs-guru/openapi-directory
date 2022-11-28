import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PayorAddPayorLogoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorAddPayorLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PayorAddPayorLogoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: shared.PayorLogoRequest;
}


export class PayorAddPayorLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
