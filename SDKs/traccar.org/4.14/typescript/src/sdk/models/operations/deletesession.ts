import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
