import { SpeakeasyBase } from "../../../internal/utils";
export declare class AbsenceEntitlementValueAttributes extends SpeakeasyBase {
    entitlement?: number;
    id?: number;
    name?: string;
}
export declare enum AbsenceEntitlementValueTypeEnum {
    TimeOffType = "TimeOffType"
}
export declare class AbsenceEntitlementValue extends SpeakeasyBase {
    attributes?: AbsenceEntitlementValueAttributes;
    type?: AbsenceEntitlementValueTypeEnum;
}
export declare class AbsenceEntitlement extends SpeakeasyBase {
    label: string;
    value: AbsenceEntitlementValue[];
}
