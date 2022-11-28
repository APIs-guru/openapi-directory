import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateWirelessCommandServerList: readonly ["https://preview.twilio.com"];
export declare class CreateWirelessCommandCreateWirelessCommandRequest extends SpeakeasyBase {
    callbackMethod?: string;
    callbackUrl?: string;
    command: string;
    commandMode?: string;
    device?: string;
    includeSid?: string;
    sim?: string;
}
export declare class CreateWirelessCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWirelessCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateWirelessCommandCreateWirelessCommandRequest;
    security: CreateWirelessCommandSecurity;
}
export declare class CreateWirelessCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessCommand?: shared.PreviewWirelessCommand;
}
