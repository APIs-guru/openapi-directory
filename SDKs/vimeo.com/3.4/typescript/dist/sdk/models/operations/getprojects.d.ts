import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetProjectsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetProjectsSortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}
export declare class GetProjectsQueryParams extends SpeakeasyBase {
    direction?: GetProjectsDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetProjectsSortEnum;
}
export declare class GetProjectsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    pathParams: GetProjectsPathParams;
    queryParams: GetProjectsQueryParams;
    security: GetProjectsSecurity;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    projects?: shared.Project[];
}
