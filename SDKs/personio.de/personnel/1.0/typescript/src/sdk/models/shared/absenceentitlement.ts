import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AbsenceEntitlementValueAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlement" })
  entitlement?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum AbsenceEntitlementValueTypeEnum {
    TimeOffType = "TimeOffType"
}


export class AbsenceEntitlementValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: AbsenceEntitlementValueAttributes;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AbsenceEntitlementValueTypeEnum;
}


export class AbsenceEntitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value", elemType: AbsenceEntitlementValue })
  value: AbsenceEntitlementValue[];
}
