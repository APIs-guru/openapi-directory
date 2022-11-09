import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AbsencePeriodsResponseDataAttributesCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class AbsencePeriodsResponseDataAttributesEmployeeAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;
}


export class AbsencePeriodsResponseDataAttributesEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AbsencePeriodsResponseDataAttributesEmployeeAttributes })
  attributes?: AbsencePeriodsResponseDataAttributesEmployeeAttributes[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class AbsencePeriodsResponseDataAttributesTimeOffType extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes })
  attributes?: AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AbsencePeriodsResponseDataAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: AbsencePeriodsResponseDataAttributesCertificate;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=days_count" })
  daysCount?: number;

  @Metadata({ data: "json, name=employee" })
  employee?: AbsencePeriodsResponseDataAttributesEmployee;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=half_day_end" })
  halfDayEnd?: number;

  @Metadata({ data: "json, name=half_day_start" })
  halfDayStart?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=time_off_type" })
  timeOffType?: AbsencePeriodsResponseDataAttributesTimeOffType;
}


export class AbsencePeriodsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AbsencePeriodsResponseDataAttributes })
  attributes: AbsencePeriodsResponseDataAttributes[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class AbsencePeriodsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: AbsencePeriodsResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
