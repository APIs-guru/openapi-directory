import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CleanScansPageResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
