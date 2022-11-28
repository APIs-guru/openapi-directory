import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SpecNoTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
