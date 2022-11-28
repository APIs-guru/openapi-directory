import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PoolStatusResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allWithLatestVersion" })
  allWithLatestVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEnvironmentPool" })
  isEnvironmentPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=poolCode" })
  poolCode?: string;

  @SpeakeasyMetadata({ data: "json, name=readyUnassignedCount" })
  readyUnassignedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=readyUnassignedLatestVersionCount" })
  readyUnassignedLatestVersionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=readyUnassignedNotLatestVersionCount" })
  readyUnassignedNotLatestVersionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}
