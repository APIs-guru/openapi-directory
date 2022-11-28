import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
    request: shared.SandboxOauthSelectAccountsRequest;
}
export declare class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxOauthSelectAccountsResponse?: Map<string, any>;
    statusCode: number;
}
