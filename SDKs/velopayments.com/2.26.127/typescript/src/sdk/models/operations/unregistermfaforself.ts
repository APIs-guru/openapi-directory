import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnregisterMfaForSelfHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class UnregisterMfaForSelfRequest extends SpeakeasyBase {
  @Metadata()
  headers: UnregisterMfaForSelfHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SelfMfaTypeUnregisterRequest;
}


export class UnregisterMfaForSelfResponse extends SpeakeasyBase {
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
