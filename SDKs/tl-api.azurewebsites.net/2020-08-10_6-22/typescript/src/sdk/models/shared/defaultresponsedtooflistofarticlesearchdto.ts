import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArticleSearchDto } from "./articlesearchdto";



// DefaultResponseDtoOfListOfArticleSearchDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfListOfArticleSearchDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: ArticleSearchDto })
  result?: ArticleSearchDto[];
}
