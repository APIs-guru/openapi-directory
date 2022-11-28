import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CallUnoldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallUnoldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CallUnoldPathParams;
}


export class CallUnoldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  call?: shared.Call;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
