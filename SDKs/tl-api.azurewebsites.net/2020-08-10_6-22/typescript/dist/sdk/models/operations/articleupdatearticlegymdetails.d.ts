import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleUpdateArticleGymDetailsRequest extends SpeakeasyBase {
    request: shared.GymArticleDetailsDto[];
}
export declare class ArticleUpdateArticleGymDetailsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
