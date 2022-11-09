import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CallTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CallTransferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CallTransfer;
}


export class CallTransferResponse extends SpeakeasyBase {
  @Metadata()
  call?: shared.Call;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
