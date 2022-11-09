import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEALPHASENDER_SERVERS: string[];
export declare class CreateAlphaSenderPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateAlphaSenderCreateAlphaSenderRequest extends SpeakeasyBase {
    alphaSender: string;
}
export declare class CreateAlphaSenderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAlphaSenderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateAlphaSenderPathParams;
    request?: CreateAlphaSenderCreateAlphaSenderRequest;
    security: CreateAlphaSenderSecurity;
}
export declare class CreateAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
