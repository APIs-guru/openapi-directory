import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=developer_message" })
  developerMessage: string;

  @Metadata({ data: "json, name=error" })
  error: string;

  @Metadata({ data: "json, name=error_code" })
  errorCode: number;

  @Metadata({ data: "json, name=link" })
  link: string;
}
