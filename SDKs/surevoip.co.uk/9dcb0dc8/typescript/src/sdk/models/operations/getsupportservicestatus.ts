import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSupportServiceStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
