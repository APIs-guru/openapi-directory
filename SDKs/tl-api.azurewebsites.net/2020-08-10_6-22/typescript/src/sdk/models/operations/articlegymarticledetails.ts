import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleGymArticleDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=articleId" })
  articleId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gymId" })
  gymId: number;
}


export class ArticleGymArticleDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArticleGymArticleDetailsPathParams;
}


export class ArticleGymArticleDetailsResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;

  @Metadata()
  gymArticleDetailsDto?: shared.GymArticleDetailsDto;

  @Metadata()
  statusCode: number;
}
