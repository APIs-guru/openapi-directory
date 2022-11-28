import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSmsCommandServerList: readonly ["https://supersim.twilio.com"];
export declare enum CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateSmsCommandCreateSmsCommandRequest extends SpeakeasyBase {
    callbackMethod?: CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;
    callbackUrl?: string;
    payload: string;
    sim: string;
}
export declare class CreateSmsCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSmsCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSmsCommandCreateSmsCommandRequest;
    security: CreateSmsCommandSecurity;
}
export declare class CreateSmsCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1SmsCommand?: shared.SupersimV1SmsCommand;
}
