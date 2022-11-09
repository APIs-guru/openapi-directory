import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmployeeSecretEmployeeSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}


export class EmployeeSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployeeSecret" })
  employeeSecret?: EmployeeSecretEmployeeSecret;
}
