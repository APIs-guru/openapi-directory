import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmployerSecretEmployerSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}


export class EmployerSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployerSecret" })
  employerSecret?: EmployerSecretEmployerSecret;
}
