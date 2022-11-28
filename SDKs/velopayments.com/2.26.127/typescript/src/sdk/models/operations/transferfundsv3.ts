import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferFundsV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class TransferFundsV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferFundsV3PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransferRequest2;
}


export class TransferFundsV3Response extends SpeakeasyBase {
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
