import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendPasswordResetEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
