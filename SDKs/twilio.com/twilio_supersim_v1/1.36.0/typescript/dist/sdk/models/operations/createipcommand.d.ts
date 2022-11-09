import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEIPCOMMAND_SERVERS: string[];
export declare enum CreateIpCommandCreateIpCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIpCommandCreateIpCommandRequest extends SpeakeasyBase {
    callbackMethod?: CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;
    callbackUrl?: string;
    devicePort: number;
    payload: string;
    payloadType?: shared.IpCommandEnumPayloadTypeEnum;
    sim: string;
}
export declare class CreateIpCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIpCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateIpCommandCreateIpCommandRequest;
    security: CreateIpCommandSecurity;
}
export declare class CreateIpCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1IpCommand?: shared.SupersimV1IpCommand;
}
