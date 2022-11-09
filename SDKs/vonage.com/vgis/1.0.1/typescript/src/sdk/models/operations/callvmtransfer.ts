import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CallVmTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallVmTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CallVmTransferPathParams;
}


export class CallVmTransferResponse extends SpeakeasyBase {
  @Metadata()
  call?: shared.Call;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
