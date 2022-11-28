import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSimServerList: readonly ["https://supersim.twilio.com"];
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
