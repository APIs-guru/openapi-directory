import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
