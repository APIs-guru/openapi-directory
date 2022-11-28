import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class UpdateUsageTriggerPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateUsageTriggerUpdateUsageTriggerRequest extends SpeakeasyBase {
    callbackMethod?: UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;
    callbackUrl?: string;
    friendlyName?: string;
}
export declare class UpdateUsageTriggerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUsageTriggerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUsageTriggerPathParams;
    request?: UpdateUsageTriggerUpdateUsageTriggerRequest;
    security: UpdateUsageTriggerSecurity;
}
export declare class UpdateUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}
