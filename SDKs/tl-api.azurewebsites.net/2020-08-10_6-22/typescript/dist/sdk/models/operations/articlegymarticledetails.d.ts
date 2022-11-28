import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleGymArticleDetailsPathParams extends SpeakeasyBase {
    articleId: number;
    gymId: number;
}
export declare class ArticleGymArticleDetailsRequest extends SpeakeasyBase {
    pathParams: ArticleGymArticleDetailsPathParams;
}
export declare class ArticleGymArticleDetailsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;
    gymArticleDetailsDto?: shared.GymArticleDetailsDto;
    statusCode: number;
}
