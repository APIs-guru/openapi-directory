import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETENETWORKACCESSPROFILENETWORK_SERVERS: string[];
export declare class DeleteNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
    networkAccessProfileSid: string;
    sid: string;
}
export declare class DeleteNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteNetworkAccessProfileNetworkPathParams;
    security: DeleteNetworkAccessProfileNetworkSecurity;
}
export declare class DeleteNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
