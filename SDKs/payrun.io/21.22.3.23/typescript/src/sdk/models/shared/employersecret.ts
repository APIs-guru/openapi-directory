import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmployerSecretEmployerSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}


export class EmployerSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployerSecret" })
  employerSecret?: EmployerSecretEmployerSecret;
}
