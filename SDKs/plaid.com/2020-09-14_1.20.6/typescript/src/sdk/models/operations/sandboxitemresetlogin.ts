import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxItemResetLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemResetLoginRequest;
}


export class SandboxItemResetLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sandboxItemResetLoginResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
