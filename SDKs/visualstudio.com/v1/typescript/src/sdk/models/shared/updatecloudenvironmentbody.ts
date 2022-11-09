import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCloudEnvironmentBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoShutdownDelayMinutes" })
  autoShutdownDelayMinutes?: number;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=planAccessToken" })
  planAccessToken?: string;

  @Metadata({ data: "json, name=planId" })
  planId?: string;

  @Metadata({ data: "json, name=skuName" })
  skuName?: string;
}
