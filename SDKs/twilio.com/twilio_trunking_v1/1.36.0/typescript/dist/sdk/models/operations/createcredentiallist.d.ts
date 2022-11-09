import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECREDENTIALLIST_SERVERS: string[];
export declare class CreateCredentialListPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class CreateCredentialListCreateCredentialListRequest extends SpeakeasyBase {
    credentialListSid: string;
}
export declare class CreateCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCredentialListPathParams;
    request?: CreateCredentialListCreateCredentialListRequest;
    security: CreateCredentialListSecurity;
}
export declare class CreateCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
