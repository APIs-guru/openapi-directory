import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListUnderstandModelBuildQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUnderstandModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandModelBuildListUnderstandModelBuildResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandModelBuildListUnderstandModelBuildResponse extends SpeakeasyBase {
    meta?: ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;
    modelBuilds?: shared.PreviewUnderstandAssistantModelBuild[];
}
export declare class ListUnderstandModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandModelBuildPathParams;
    queryParams: ListUnderstandModelBuildQueryParams;
    security: ListUnderstandModelBuildSecurity;
}
export declare class ListUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandModelBuildResponse?: ListUnderstandModelBuildListUnderstandModelBuildResponse;
    statusCode: number;
}
