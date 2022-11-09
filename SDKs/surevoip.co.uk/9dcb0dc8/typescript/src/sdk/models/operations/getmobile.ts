import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMobileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
