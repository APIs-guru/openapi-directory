import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleGymArticleDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=articleId" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gymId" })
  gymId: number;
}


export class ArticleGymArticleDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleGymArticleDetailsPathParams;
}


export class ArticleGymArticleDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;

  @SpeakeasyMetadata()
  gymArticleDetailsDto?: shared.GymArticleDetailsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
