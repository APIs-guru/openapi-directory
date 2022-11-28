import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetArticlesCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
