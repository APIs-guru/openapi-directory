import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEOUTGOINGCALLERID_SERVERS: string[];
export declare class UpdateOutgoingCallerIdPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateOutgoingCallerIdSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateOutgoingCallerIdRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateOutgoingCallerIdPathParams;
    request?: UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest;
    security: UpdateOutgoingCallerIdSecurity;
}
export declare class UpdateOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
