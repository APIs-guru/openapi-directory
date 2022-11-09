import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBillingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
