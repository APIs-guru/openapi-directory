import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemSetVerificationStatusRequest;
}


export class SandboxItemSetVerificationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sandboxItemSetVerificationStatusResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
