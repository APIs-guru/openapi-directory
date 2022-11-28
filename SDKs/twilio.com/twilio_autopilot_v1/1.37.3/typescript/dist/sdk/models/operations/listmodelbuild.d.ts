import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListModelBuildQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListModelBuildListModelBuildResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListModelBuildListModelBuildResponse extends SpeakeasyBase {
    meta?: ListModelBuildListModelBuildResponseMeta;
    modelBuilds?: shared.AutopilotV1AssistantModelBuild[];
}
export declare class ListModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListModelBuildPathParams;
    queryParams: ListModelBuildQueryParams;
    security: ListModelBuildSecurity;
}
export declare class ListModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    listModelBuildResponse?: ListModelBuildListModelBuildResponse;
    statusCode: number;
}
