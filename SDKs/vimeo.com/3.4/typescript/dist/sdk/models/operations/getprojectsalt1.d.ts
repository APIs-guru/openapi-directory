import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProjectsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetProjectsAlt1SortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}
export declare class GetProjectsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetProjectsAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetProjectsAlt1SortEnum;
}
export declare class GetProjectsAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectsAlt1Request extends SpeakeasyBase {
    queryParams: GetProjectsAlt1QueryParams;
    security: GetProjectsAlt1Security;
}
export declare class GetProjectsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    projects?: shared.Project[];
}
