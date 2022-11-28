import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class UpdateNetworkAccessProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class UpdateNetworkAccessProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateNetworkAccessProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateNetworkAccessProfilePathParams;
    request?: UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;
    security: UpdateNetworkAccessProfileSecurity;
}
export declare class UpdateNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
