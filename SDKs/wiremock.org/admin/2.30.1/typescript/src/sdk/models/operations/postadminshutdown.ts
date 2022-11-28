import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminShutdownResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
