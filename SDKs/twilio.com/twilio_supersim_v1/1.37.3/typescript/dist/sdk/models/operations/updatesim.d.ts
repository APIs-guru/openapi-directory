import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSimServerList: readonly ["https://supersim.twilio.com"];
export declare class UpdateSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSimUpdateSimRequest extends SpeakeasyBase {
    accountSid?: string;
    callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;
    callbackUrl?: string;
    fleet?: string;
    status?: shared.SimEnumStatusUpdateEnum;
    uniqueName?: string;
}
export declare class UpdateSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSimPathParams;
    request?: UpdateSimUpdateSimRequest;
    security: UpdateSimSecurity;
}
export declare class UpdateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Sim?: shared.SupersimV1Sim;
}
