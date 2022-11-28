import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserVodsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetUserVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserVodsFilterEnum {
    Film = "film",
    Series = "series"
}
export declare enum GetUserVodsSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}
export declare class GetUserVodsQueryParams extends SpeakeasyBase {
    direction?: GetUserVodsDirectionEnum;
    filter?: GetUserVodsFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetUserVodsSortEnum;
}
export declare class GetUserVodsRequest extends SpeakeasyBase {
    pathParams: GetUserVodsPathParams;
    queryParams: GetUserVodsQueryParams;
}
export declare class GetUserVodsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPages?: shared.OnDemandPage[];
}
