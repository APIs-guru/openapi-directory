import { SpeakeasyBase } from "../../../internal/utils";
import { LookupType } from "./lookuptype";
export declare enum ContactPointTypeValueEnum {
    UnitWebAddress = "UNIT_WEB_ADDRESS",
    TrustWebAddress = "TRUST_WEB_ADDRESS",
    PvAdminName = "PV_ADMIN_NAME",
    PvAdminPhone = "PV_ADMIN_PHONE",
    PvAdminEmail = "PV_ADMIN_EMAIL",
    UnitEnquiriesPhone = "UNIT_ENQUIRIES_PHONE",
    UnitEnquiriesEmail = "UNIT_ENQUIRIES_EMAIL",
    AppointmentPhone = "APPOINTMENT_PHONE",
    AppointmentEmail = "APPOINTMENT_EMAIL",
    OutOfHoursInfo = "OUT_OF_HOURS_INFO"
}
export declare class ContactPointType extends SpeakeasyBase {
    description?: string;
    id?: number;
    lookupType?: LookupType;
    value?: ContactPointTypeValueEnum;
}
