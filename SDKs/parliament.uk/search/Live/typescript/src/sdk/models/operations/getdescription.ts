import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDescriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
