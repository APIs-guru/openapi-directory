import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LookupType } from "./lookuptype";

export enum ContactPointTypeValueEnum {
    UnitWebAddress = "UNIT_WEB_ADDRESS"
,    TrustWebAddress = "TRUST_WEB_ADDRESS"
,    PvAdminName = "PV_ADMIN_NAME"
,    PvAdminPhone = "PV_ADMIN_PHONE"
,    PvAdminEmail = "PV_ADMIN_EMAIL"
,    UnitEnquiriesPhone = "UNIT_ENQUIRIES_PHONE"
,    UnitEnquiriesEmail = "UNIT_ENQUIRIES_EMAIL"
,    AppointmentPhone = "APPOINTMENT_PHONE"
,    AppointmentEmail = "APPOINTMENT_EMAIL"
,    OutOfHoursInfo = "OUT_OF_HOURS_INFO"
}


export class ContactPointType extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lookupType" })
  lookupType?: LookupType;

  @Metadata({ data: "json, name=value" })
  value?: ContactPointTypeValueEnum;
}
