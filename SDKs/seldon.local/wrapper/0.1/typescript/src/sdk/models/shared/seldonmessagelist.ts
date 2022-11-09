import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeldonMessage } from "./seldonmessage";


export class SeldonMessageList extends SpeakeasyBase {
  @Metadata({ data: "json, name=seldonMessages", elemType: shared.SeldonMessage })
  seldonMessages?: SeldonMessage[];
}
