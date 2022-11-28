import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCompositionServerList: readonly ["https://video.twilio.com"];
export declare class DeleteCompositionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCompositionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCompositionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCompositionPathParams;
    security: DeleteCompositionSecurity;
}
export declare class DeleteCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
