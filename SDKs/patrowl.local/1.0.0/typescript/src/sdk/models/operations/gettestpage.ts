import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTestPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
