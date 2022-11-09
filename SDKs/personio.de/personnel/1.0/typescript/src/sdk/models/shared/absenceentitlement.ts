import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AbsenceEntitlementValueAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=entitlement" })
  entitlement?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum AbsenceEntitlementValueTypeEnum {
    TimeOffType = "TimeOffType"
}


export class AbsenceEntitlementValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: AbsenceEntitlementValueAttributes;

  @Metadata({ data: "json, name=type" })
  type?: AbsenceEntitlementValueTypeEnum;
}


export class AbsenceEntitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value", elemType: shared.AbsenceEntitlementValue })
  value: AbsenceEntitlementValue[];
}
