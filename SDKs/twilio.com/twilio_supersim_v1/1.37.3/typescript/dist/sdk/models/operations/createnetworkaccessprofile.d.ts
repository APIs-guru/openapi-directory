import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest extends SpeakeasyBase {
    networks?: string[];
    uniqueName?: string;
}
export declare class CreateNetworkAccessProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNetworkAccessProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;
    security: CreateNetworkAccessProfileSecurity;
}
export declare class CreateNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
