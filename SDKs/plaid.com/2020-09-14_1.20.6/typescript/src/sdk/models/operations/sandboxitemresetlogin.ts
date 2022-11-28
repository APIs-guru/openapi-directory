import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxItemResetLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemResetLoginRequest;
}


export class SandboxItemResetLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sandboxItemResetLoginResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
