import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleUpdateArticleGymDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.GymArticleDetailsDto })
  request: shared.GymArticleDetailsDto[];
}


export class ArticleUpdateArticleGymDetailsResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @Metadata()
  statusCode: number;
}
