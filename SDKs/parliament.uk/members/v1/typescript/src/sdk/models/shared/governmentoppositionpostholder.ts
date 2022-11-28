import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberItem } from "./memberitem";



export class GovernmentOppositionPostHolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isPaid" })
  isPaid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layingMinisterName" })
  layingMinisterName?: string;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: MemberItem;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
