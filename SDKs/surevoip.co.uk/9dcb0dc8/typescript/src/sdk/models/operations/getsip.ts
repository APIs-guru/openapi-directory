import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
