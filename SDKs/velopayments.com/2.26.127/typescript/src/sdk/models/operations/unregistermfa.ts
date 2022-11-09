import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnregisterMfaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnregisterMfaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnregisterMfaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UnregisterMfaRequest;
}


export class UnregisterMfaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
