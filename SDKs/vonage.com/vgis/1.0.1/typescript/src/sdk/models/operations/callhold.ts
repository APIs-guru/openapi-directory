import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CallHoldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallHoldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CallHoldPathParams;
}


export class CallHoldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  call?: shared.Call;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
