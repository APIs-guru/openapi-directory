import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
