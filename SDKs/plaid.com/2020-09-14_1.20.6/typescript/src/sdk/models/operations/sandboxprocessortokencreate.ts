import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxProcessorTokenCreateRequest;
}


export class SandboxProcessorTokenCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxProcessorTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
