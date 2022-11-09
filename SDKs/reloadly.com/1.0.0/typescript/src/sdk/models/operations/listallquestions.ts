import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllQuestionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
