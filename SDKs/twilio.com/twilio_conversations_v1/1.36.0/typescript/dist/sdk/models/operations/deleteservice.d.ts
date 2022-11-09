import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESERVICE_SERVERS: string[];
export declare class DeleteServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServicePathParams;
    security: DeleteServiceSecurity;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
