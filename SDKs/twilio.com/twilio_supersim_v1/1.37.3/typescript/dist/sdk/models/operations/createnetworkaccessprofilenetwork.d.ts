import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
    networkAccessProfileSid: string;
}
export declare class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    network: string;
}
export declare class CreateNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateNetworkAccessProfileNetworkPathParams;
    request?: CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;
    security: CreateNetworkAccessProfileNetworkSecurity;
}
export declare class CreateNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
