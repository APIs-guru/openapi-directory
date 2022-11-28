import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CallVmTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallVmTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CallVmTransferPathParams;
}


export class CallVmTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  call?: shared.Call;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
