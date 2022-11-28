import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticlePutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ArticleDto;
}


export class ArticlePutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
