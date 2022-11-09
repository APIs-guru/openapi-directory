import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageError extends SpeakeasyBase {
  @Metadata({ data: "json, name=status_code" })
  statusCode?: number;

  @Metadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
