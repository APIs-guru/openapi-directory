import { SpeakeasyBase } from "../../../internal/utils";
export declare class AbsencePeriodsResponseDataAttributesCertificate extends SpeakeasyBase {
    status?: string;
}
export declare class AbsencePeriodsResponseDataAttributesEmployeeAttributes extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
}
export declare class AbsencePeriodsResponseDataAttributesEmployee extends SpeakeasyBase {
    attributes?: AbsencePeriodsResponseDataAttributesEmployeeAttributes[];
    type?: string;
}
export declare class AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes extends SpeakeasyBase {
    id?: number;
    name?: string;
}
export declare class AbsencePeriodsResponseDataAttributesTimeOffType extends SpeakeasyBase {
    attributes?: AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes[];
    type?: string;
}
export declare class AbsencePeriodsResponseDataAttributes extends SpeakeasyBase {
    certificate?: AbsencePeriodsResponseDataAttributesCertificate;
    createdAt?: string;
    daysCount?: number;
    employee?: AbsencePeriodsResponseDataAttributesEmployee;
    endDate?: string;
    halfDayEnd?: number;
    halfDayStart?: number;
    id?: number;
    startDate?: string;
    status?: string;
    timeOffType?: AbsencePeriodsResponseDataAttributesTimeOffType;
}
export declare class AbsencePeriodsResponseData extends SpeakeasyBase {
    attributes: AbsencePeriodsResponseDataAttributes[];
    type: string;
}
export declare class AbsencePeriodsResponse extends SpeakeasyBase {
    data: AbsencePeriodsResponseData;
    success: boolean;
}
