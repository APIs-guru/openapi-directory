import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HealthCheckHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=Info" })
  info?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}


export class HealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthCheck" })
  healthCheck?: HealthCheckHealthCheck;
}
