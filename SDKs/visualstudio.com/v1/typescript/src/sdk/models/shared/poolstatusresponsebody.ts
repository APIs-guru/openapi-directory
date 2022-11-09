import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolStatusResponseBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allWithLatestVersion" })
  allWithLatestVersion?: boolean;

  @Metadata({ data: "json, name=isEnvironmentPool" })
  isEnvironmentPool?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=poolCode" })
  poolCode?: string;

  @Metadata({ data: "json, name=readyUnassignedCount" })
  readyUnassignedCount?: number;

  @Metadata({ data: "json, name=readyUnassignedLatestVersionCount" })
  readyUnassignedLatestVersionCount?: number;

  @Metadata({ data: "json, name=readyUnassignedNotLatestVersionCount" })
  readyUnassignedNotLatestVersionCount?: number;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}
