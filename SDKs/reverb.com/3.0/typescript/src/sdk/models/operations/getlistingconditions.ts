import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListingConditionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
