import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";



export class MemberParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: Party;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
