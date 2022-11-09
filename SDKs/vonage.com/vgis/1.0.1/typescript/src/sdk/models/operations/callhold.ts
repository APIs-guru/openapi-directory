import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CallHoldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallHoldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CallHoldPathParams;
}


export class CallHoldResponse extends SpeakeasyBase {
  @Metadata()
  call?: shared.Call;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
