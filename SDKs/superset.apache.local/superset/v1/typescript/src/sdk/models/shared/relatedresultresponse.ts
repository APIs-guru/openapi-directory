import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RelatedResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
