import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReadinessPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
