import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCloudEnvironmentBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=planAccessToken" })
  planAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=skuName" })
  skuName?: string;
}
