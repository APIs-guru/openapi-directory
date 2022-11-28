import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SessionIdGetPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class SessionIdGetQueryParams extends SpeakeasyBase {
    includeRelationships?: boolean;
}
export declare class SessionIdGetRequest extends SpeakeasyBase {
    pathParams: SessionIdGetPathParams;
    queryParams: SessionIdGetQueryParams;
}
export declare class SessionIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    session?: shared.Session;
}
