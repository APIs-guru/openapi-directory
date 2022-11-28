import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";



export class SearchMembershipCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: AllEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;
}
