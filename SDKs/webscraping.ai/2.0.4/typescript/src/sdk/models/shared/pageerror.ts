import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
