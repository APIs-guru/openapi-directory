import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CallTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CallTransferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CallTransfer;
}


export class CallTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  call?: shared.Call;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
