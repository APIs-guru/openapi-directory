import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DistinctResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}
