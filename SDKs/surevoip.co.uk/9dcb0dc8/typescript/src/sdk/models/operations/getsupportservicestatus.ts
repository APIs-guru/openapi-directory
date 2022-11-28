import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSupportServiceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
