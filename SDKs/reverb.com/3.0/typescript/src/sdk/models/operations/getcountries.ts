import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
