import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECOMMAND_SERVERS: string[];
export declare enum CreateCommandCreateCommandRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCommandCreateCommandRequest extends SpeakeasyBase {
    callbackMethod?: CreateCommandCreateCommandRequestCallbackMethodEnum;
    callbackUrl?: string;
    command: string;
    commandMode?: shared.CommandEnumCommandModeEnum;
    deliveryReceiptRequested?: boolean;
    includeSid?: string;
    sim?: string;
}
export declare class CreateCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCommandCreateCommandRequest;
    security: CreateCommandSecurity;
}
export declare class CreateCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1Command?: shared.WirelessV1Command;
}
