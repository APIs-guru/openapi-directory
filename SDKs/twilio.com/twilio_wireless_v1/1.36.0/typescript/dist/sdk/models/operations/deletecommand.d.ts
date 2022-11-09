import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECOMMAND_SERVERS: string[];
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
