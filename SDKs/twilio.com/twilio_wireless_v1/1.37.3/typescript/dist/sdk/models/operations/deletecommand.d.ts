import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCommandServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteCommandPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCommandSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCommandRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCommandPathParams;
    security: DeleteCommandSecurity;
}
export declare class DeleteCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
