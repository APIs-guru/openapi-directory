import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCspsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
