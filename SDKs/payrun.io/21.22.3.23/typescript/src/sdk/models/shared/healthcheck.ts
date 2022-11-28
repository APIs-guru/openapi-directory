import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HealthCheckHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}


export class HealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthCheck" })
  healthCheck?: HealthCheckHealthCheck;
}
