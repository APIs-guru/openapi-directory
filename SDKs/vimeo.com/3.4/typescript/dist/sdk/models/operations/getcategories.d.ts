import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCategoriesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategoriesSortEnum {
    LastVideoFeaturedTime = "last_video_featured_time",
    Name = "name"
}
export declare class GetCategoriesQueryParams extends SpeakeasyBase {
    direction?: GetCategoriesDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetCategoriesSortEnum;
}
export declare class GetCategoriesRequest extends SpeakeasyBase {
    queryParams: GetCategoriesQueryParams;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    categories?: shared.Category[];
}
