import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SessionsIdViewsGetPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class SessionsIdViewsGetRequest extends SpeakeasyBase {
    pathParams: SessionsIdViewsGetPathParams;
}
export declare class SessionsIdViewsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    views?: shared.View[];
}
