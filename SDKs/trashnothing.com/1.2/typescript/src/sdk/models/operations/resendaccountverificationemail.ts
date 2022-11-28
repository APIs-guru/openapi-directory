import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendAccountVerificationEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
