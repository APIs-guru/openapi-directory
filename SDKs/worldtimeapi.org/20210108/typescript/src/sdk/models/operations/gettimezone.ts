import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTimezoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listJsonResponse?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
