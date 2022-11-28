import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserVodsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserVodsAlt1FilterEnum {
    Film = "film",
    Series = "series"
}
export declare enum GetUserVodsAlt1SortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}
export declare class GetUserVodsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetUserVodsAlt1DirectionEnum;
    filter?: GetUserVodsAlt1FilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetUserVodsAlt1SortEnum;
}
export declare class GetUserVodsAlt1Request extends SpeakeasyBase {
    queryParams: GetUserVodsAlt1QueryParams;
}
export declare class GetUserVodsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPages?: shared.OnDemandPage[];
}
