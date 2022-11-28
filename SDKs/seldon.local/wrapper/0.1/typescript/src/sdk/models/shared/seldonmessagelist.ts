import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeldonMessage } from "./seldonmessage";



export class SeldonMessageList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=seldonMessages", elemType: SeldonMessage })
  seldonMessages?: SeldonMessage[];
}
