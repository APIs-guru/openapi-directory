import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
