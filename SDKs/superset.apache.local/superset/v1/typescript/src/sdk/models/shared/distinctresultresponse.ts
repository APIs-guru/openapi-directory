import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DistinctResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
