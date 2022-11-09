import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLivenessPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
