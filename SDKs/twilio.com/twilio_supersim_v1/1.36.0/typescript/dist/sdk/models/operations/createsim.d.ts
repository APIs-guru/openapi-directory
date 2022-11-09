import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESIM_SERVERS: string[];
export declare class CreateSimCreateSimRequest extends SpeakeasyBase {
    iccid: string;
    registrationCode: string;
}
export declare class CreateSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSimCreateSimRequest;
    security: CreateSimSecurity;
}
export declare class CreateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Sim?: shared.SupersimV1Sim;
}
