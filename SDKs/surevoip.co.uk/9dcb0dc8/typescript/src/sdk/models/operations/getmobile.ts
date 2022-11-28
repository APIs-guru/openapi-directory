import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMobileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
