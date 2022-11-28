import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxPublicTokenCreateRequest;
}


export class SandboxPublicTokenCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sandboxPublicTokenCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
