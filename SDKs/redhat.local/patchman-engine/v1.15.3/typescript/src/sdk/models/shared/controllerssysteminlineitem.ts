import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersSystemInlineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=culled_timestamp" })
  culledTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insights_id" })
  insightsId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_evaluation" })
  lastEvaluation?: string;

  @SpeakeasyMetadata({ data: "json, name=last_upload" })
  lastUpload?: string;

  @SpeakeasyMetadata({ data: "json, name=os_major" })
  osMajor?: string;

  @SpeakeasyMetadata({ data: "json, name=os_minor" })
  osMinor?: string;

  @SpeakeasyMetadata({ data: "json, name=os_name" })
  osName?: string;

  @SpeakeasyMetadata({ data: "json, name=other_count" })
  otherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=packages_installed" })
  packagesInstalled?: number;

  @SpeakeasyMetadata({ data: "json, name=packages_updatable" })
  packagesUpdatable?: number;

  @SpeakeasyMetadata({ data: "json, name=rhba_count" })
  rhbaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rhea_count" })
  rheaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rhsa_count" })
  rhsaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rhsm" })
  rhsm?: string;

  @SpeakeasyMetadata({ data: "json, name=stale" })
  stale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stale_timestamp" })
  staleTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=stale_warning_timestamp" })
  staleWarningTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=third_party" })
  thirdParty?: boolean;
}
