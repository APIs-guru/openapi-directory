import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectVideosAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum GetProjectVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetProjectVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}
export declare class GetProjectVideosAlt1QueryParams extends SpeakeasyBase {
    direction?: GetProjectVideosAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetProjectVideosAlt1SortEnum;
}
export declare class GetProjectVideosAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectVideosAlt1Request extends SpeakeasyBase {
    pathParams: GetProjectVideosAlt1PathParams;
    queryParams: GetProjectVideosAlt1QueryParams;
    security: GetProjectVideosAlt1Security;
}
export declare class GetProjectVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    videos?: shared.Video[];
}
