import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
