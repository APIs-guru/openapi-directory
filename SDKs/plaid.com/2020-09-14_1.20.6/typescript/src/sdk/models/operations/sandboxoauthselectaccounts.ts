import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxOauthSelectAccountsRequest;
}


export class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxOauthSelectAccountsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
