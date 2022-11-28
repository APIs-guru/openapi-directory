import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleSearchDto } from "./articlesearchdto";
/**
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *
**/
export declare class DefaultResponseDtoOfListOfArticleSearchDto extends SpeakeasyBase {
    isError?: boolean;
    message?: string;
    responseException?: any;
    result?: ArticleSearchDto[];
}
