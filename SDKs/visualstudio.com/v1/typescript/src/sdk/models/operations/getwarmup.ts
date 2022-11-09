import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWarmupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
