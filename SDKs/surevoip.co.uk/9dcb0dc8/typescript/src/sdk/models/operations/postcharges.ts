import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostChargesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
