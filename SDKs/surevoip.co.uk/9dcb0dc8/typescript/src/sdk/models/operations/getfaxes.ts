import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
