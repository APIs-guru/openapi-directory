import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSmsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
