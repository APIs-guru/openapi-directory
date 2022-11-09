import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHostedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
