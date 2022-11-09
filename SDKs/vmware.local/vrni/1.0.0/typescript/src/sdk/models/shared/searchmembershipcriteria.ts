import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";


export class SearchMembershipCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_type" })
  entityType?: AllEntityTypeEnum;

  @Metadata({ data: "json, name=filter" })
  filter?: string;
}
