import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpTxtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dateTimeTextResponse?: string;

  @SpeakeasyMetadata()
  errorTextResponse?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
