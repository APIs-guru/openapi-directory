import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATETRUNK_SERVERS: string[];
export declare class UpdateTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateTrunkUpdateTrunkRequest extends SpeakeasyBase {
    cnamLookupEnabled?: boolean;
    disasterRecoveryMethod?: UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;
    disasterRecoveryUrl?: string;
    domainName?: string;
    friendlyName?: string;
    secure?: boolean;
    transferCallerId?: shared.TrunkEnumTransferCallerIdEnum;
    transferMode?: shared.TrunkEnumTransferSettingEnum;
}
export declare class UpdateTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTrunkPathParams;
    request?: UpdateTrunkUpdateTrunkRequest;
    security: UpdateTrunkSecurity;
}
export declare class UpdateTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
