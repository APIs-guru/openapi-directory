import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";



export class PartySeatCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=female" })
  female?: number;

  @SpeakeasyMetadata({ data: "json, name=male" })
  male?: number;

  @SpeakeasyMetadata({ data: "json, name=nonBinary" })
  nonBinary?: number;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: Party;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
