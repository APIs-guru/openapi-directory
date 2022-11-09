import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SelectStarResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;
}
