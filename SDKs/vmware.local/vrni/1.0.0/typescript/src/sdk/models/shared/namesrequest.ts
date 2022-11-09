import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameRequestParam } from "./namerequestparam";


export class NamesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.NameRequestParam })
  entities?: NameRequestParam[];
}
