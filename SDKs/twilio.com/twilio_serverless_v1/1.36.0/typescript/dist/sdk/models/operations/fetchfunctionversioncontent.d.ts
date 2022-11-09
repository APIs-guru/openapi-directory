import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFUNCTIONVERSIONCONTENT_SERVERS: string[];
export declare class FetchFunctionVersionContentPathParams extends SpeakeasyBase {
    functionSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchFunctionVersionContentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFunctionVersionContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFunctionVersionContentPathParams;
    security: FetchFunctionVersionContentSecurity;
}
export declare class FetchFunctionVersionContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent?: shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent;
}
