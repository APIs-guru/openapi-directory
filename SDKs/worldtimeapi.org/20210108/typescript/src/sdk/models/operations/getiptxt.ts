import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpTxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dateTimeTextResponse?: string;

  @Metadata()
  errorTextResponse?: string;

  @Metadata()
  statusCode: number;
}
