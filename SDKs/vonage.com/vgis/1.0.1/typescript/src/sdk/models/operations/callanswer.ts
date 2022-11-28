import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CallAnswerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallAnswerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CallAnswerPathParams;
}


export class CallAnswerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  call?: shared.Call;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
