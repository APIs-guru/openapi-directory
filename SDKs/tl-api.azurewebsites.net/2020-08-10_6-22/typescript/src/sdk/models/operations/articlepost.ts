import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticlePostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ArticleDto;
}


export class ArticlePostResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @Metadata()
  statusCode: number;
}
