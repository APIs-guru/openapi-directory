import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEIPACCESSCONTROLLIST_SERVERS: string[];
export declare class CreateIpAccessControlListPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class CreateIpAccessControlListCreateIpAccessControlListRequest extends SpeakeasyBase {
    ipAccessControlListSid: string;
}
export declare class CreateIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIpAccessControlListPathParams;
    request?: CreateIpAccessControlListCreateIpAccessControlListRequest;
    security: CreateIpAccessControlListSecurity;
}
export declare class CreateIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
