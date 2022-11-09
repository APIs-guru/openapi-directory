import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminShutdownResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
