import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostChargesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
