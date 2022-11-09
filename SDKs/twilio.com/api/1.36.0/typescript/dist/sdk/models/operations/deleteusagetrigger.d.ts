import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUSAGETRIGGER_SERVERS: string[];
export declare class DeleteUsageTriggerPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteUsageTriggerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUsageTriggerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUsageTriggerPathParams;
    security: DeleteUsageTriggerSecurity;
}
export declare class DeleteUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
