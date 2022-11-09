import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResendTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ResendTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResendTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResendTokenRequest;
}


export class ResendTokenResponse extends SpeakeasyBase {
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
}
