import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCurrenciesListingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
