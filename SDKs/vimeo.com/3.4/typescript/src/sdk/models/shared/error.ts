import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developer_message" })
  developerMessage: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;
}
