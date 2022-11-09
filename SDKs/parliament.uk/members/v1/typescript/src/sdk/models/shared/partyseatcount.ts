import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Party } from "./party";


export class PartySeatCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=female" })
  female?: number;

  @Metadata({ data: "json, name=male" })
  male?: number;

  @Metadata({ data: "json, name=nonBinary" })
  nonBinary?: number;

  @Metadata({ data: "json, name=party" })
  party?: Party;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
