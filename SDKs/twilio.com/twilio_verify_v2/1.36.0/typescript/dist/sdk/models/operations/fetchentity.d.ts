import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHENTITY_SERVERS: string[];
export declare class FetchEntityPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class FetchEntitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEntityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEntityPathParams;
    security: FetchEntitySecurity;
}
export declare class FetchEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntity?: shared.VerifyV2ServiceEntity;
}
