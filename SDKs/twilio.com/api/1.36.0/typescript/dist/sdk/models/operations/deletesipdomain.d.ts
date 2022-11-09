import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPDOMAIN_SERVERS: string[];
export declare class DeleteSipDomainPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipDomainPathParams;
    security: DeleteSipDomainSecurity;
}
export declare class DeleteSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
