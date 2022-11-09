import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberItem } from "./memberitem";


export class GovernmentOppositionPostHolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=isPaid" })
  isPaid?: boolean;

  @Metadata({ data: "json, name=layingMinisterName" })
  layingMinisterName?: string;

  @Metadata({ data: "json, name=member" })
  member?: MemberItem;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
