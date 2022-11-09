import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTopupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
