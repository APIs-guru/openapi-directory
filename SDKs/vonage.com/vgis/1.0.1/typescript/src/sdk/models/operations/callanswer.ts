import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CallAnswerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallAnswerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CallAnswerPathParams;
}


export class CallAnswerResponse extends SpeakeasyBase {
  @Metadata()
  call?: shared.Call;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
