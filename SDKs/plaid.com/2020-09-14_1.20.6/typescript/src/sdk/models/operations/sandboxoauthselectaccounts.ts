import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxOauthSelectAccountsRequest;
}


export class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sandboxOauthSelectAccountsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
