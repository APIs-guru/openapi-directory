import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
