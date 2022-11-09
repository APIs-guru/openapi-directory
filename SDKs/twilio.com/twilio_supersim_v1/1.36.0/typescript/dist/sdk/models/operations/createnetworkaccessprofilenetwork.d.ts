import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATENETWORKACCESSPROFILENETWORK_SERVERS: string[];
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
