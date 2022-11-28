import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
