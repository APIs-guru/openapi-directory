import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesFlatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
