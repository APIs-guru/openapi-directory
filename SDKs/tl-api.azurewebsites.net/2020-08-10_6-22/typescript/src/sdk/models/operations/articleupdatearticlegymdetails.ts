import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleUpdateArticleGymDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.GymArticleDetailsDto })
  request: shared.GymArticleDetailsDto[];
}


export class ArticleUpdateArticleGymDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
