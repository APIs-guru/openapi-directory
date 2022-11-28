import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChargesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
