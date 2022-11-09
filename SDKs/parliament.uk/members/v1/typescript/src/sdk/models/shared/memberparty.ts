import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Party } from "./party";


export class MemberParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=party" })
  party?: Party;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
