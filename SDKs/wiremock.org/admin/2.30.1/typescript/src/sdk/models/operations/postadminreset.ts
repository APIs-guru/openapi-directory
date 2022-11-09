import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
