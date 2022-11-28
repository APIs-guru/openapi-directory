import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleGetMeasureUnitsQueryParams extends SpeakeasyBase {
    type?: string;
}
export declare class ArticleGetMeasureUnitsRequest extends SpeakeasyBase {
    queryParams: ArticleGetMeasureUnitsQueryParams;
}
export declare class ArticleGetMeasureUnitsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
