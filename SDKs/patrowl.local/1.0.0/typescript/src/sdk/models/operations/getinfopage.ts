import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInfoPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
