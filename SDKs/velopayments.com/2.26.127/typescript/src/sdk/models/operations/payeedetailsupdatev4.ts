import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PayeeDetailsUpdateV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class PayeeDetailsUpdateV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PayeeDetailsUpdateV4PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePayeeDetailsRequest2Input;
}


export class PayeeDetailsUpdateV4Response extends SpeakeasyBase {
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
