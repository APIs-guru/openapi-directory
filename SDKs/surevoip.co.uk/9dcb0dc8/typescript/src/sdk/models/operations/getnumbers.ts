import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
