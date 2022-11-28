import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SelectStarResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}
