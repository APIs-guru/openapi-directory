import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemSetVerificationStatusRequest;
}


export class SandboxItemSetVerificationStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sandboxItemSetVerificationStatusResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
