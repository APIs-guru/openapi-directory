import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesQueryParams extends SpeakeasyBase {
    filterParent?: string;
}
export declare class GetCategoriesRequest extends SpeakeasyBase {
    queryParams: GetCategoriesQueryParams;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    listCategoriesResponse?: shared.ListCategoriesResponse;
    statusCode: number;
}
