import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CallUnoldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CallUnoldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CallUnoldPathParams;
}


export class CallUnoldResponse extends SpeakeasyBase {
  @Metadata()
  call?: shared.Call;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
