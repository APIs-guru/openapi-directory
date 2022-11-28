import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameRequestParam } from "./namerequestparam";



export class NamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: NameRequestParam })
  entities?: NameRequestParam[];
}
