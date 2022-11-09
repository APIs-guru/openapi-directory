import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArticleSearchDto } from "./articlesearchdto";


// DefaultResponseDtoOfListOfArticleSearchDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfListOfArticleSearchDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=responseException" })
  responseException?: any;

  @Metadata({ data: "json, name=result", elemType: shared.ArticleSearchDto })
  result?: ArticleSearchDto[];
}
