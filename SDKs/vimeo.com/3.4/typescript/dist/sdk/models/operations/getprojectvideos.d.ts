import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectVideosPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare enum GetProjectVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetProjectVideosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}
export declare class GetProjectVideosQueryParams extends SpeakeasyBase {
    direction?: GetProjectVideosDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetProjectVideosSortEnum;
}
export declare class GetProjectVideosSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectVideosRequest extends SpeakeasyBase {
    pathParams: GetProjectVideosPathParams;
    queryParams: GetProjectVideosQueryParams;
    security: GetProjectVideosSecurity;
}
export declare class GetProjectVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    videos?: shared.Video[];
}
