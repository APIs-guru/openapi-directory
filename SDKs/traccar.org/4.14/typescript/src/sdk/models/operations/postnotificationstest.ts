import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNotificationsTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
