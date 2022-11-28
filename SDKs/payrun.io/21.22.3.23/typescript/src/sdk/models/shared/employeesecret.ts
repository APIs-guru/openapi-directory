import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmployeeSecretEmployeeSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}


export class EmployeeSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployeeSecret" })
  employeeSecret?: EmployeeSecretEmployeeSecret;
}
