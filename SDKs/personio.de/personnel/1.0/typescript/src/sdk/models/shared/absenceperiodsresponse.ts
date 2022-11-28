import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AbsencePeriodsResponseDataAttributesCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class AbsencePeriodsResponseDataAttributesEmployeeAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;
}


export class AbsencePeriodsResponseDataAttributesEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributesEmployeeAttributes })
  attributes?: AbsencePeriodsResponseDataAttributesEmployeeAttributes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class AbsencePeriodsResponseDataAttributesTimeOffType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes })
  attributes?: AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AbsencePeriodsResponseDataAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: AbsencePeriodsResponseDataAttributesCertificate;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=days_count" })
  daysCount?: number;

  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: AbsencePeriodsResponseDataAttributesEmployee;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=half_day_end" })
  halfDayEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=half_day_start" })
  halfDayStart?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=time_off_type" })
  timeOffType?: AbsencePeriodsResponseDataAttributesTimeOffType;
}


export class AbsencePeriodsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AbsencePeriodsResponseDataAttributes })
  attributes: AbsencePeriodsResponseDataAttributes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class AbsencePeriodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AbsencePeriodsResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
