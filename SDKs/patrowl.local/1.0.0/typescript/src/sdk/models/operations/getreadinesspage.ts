import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReadinessPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
