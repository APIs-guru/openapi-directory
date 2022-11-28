import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PayeeDetailsUpdateV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class PayeeDetailsUpdateV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PayeeDetailsUpdateV3PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePayeeDetailsRequestInput;
}


export class PayeeDetailsUpdateV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
