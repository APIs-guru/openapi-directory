import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare enum CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateTrunkCreateTrunkRequest extends SpeakeasyBase {
    cnamLookupEnabled?: boolean;
    disasterRecoveryMethod?: CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;
    disasterRecoveryUrl?: string;
    domainName?: string;
    friendlyName?: string;
    secure?: boolean;
    transferCallerId?: shared.TrunkEnumTransferCallerIdEnum;
    transferMode?: shared.TrunkEnumTransferSettingEnum;
}
export declare class CreateTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateTrunkCreateTrunkRequest;
    security: CreateTrunkSecurity;
}
export declare class CreateTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
