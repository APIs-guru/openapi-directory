import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendPasswordResetEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
