import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesTaxonomyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
