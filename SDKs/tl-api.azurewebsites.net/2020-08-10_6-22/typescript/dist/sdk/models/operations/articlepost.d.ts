import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticlePostRequest extends SpeakeasyBase {
    request: shared.ArticleDto;
}
export declare class ArticlePostResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
