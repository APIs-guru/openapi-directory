import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSiprecServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSiprecPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class UpdateSiprecUpdateSiprecRequest extends SpeakeasyBase {
    status: shared.SiprecEnumUpdateStatusEnum;
}
export declare class UpdateSiprecSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSiprecRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSiprecPathParams;
    request?: UpdateSiprecUpdateSiprecRequest;
    security: UpdateSiprecSecurity;
}
export declare class UpdateSiprecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallSiprec?: shared.ApiV2010AccountCallSiprec;
}
