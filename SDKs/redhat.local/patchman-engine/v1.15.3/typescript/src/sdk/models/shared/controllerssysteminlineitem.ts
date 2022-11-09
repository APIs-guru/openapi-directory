import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersSystemInlineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=culled_timestamp" })
  culledTimestamp?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insights_id" })
  insightsId?: string;

  @Metadata({ data: "json, name=last_evaluation" })
  lastEvaluation?: string;

  @Metadata({ data: "json, name=last_upload" })
  lastUpload?: string;

  @Metadata({ data: "json, name=os_major" })
  osMajor?: string;

  @Metadata({ data: "json, name=os_minor" })
  osMinor?: string;

  @Metadata({ data: "json, name=os_name" })
  osName?: string;

  @Metadata({ data: "json, name=other_count" })
  otherCount?: number;

  @Metadata({ data: "json, name=packages_installed" })
  packagesInstalled?: number;

  @Metadata({ data: "json, name=packages_updatable" })
  packagesUpdatable?: number;

  @Metadata({ data: "json, name=rhba_count" })
  rhbaCount?: number;

  @Metadata({ data: "json, name=rhea_count" })
  rheaCount?: number;

  @Metadata({ data: "json, name=rhsa_count" })
  rhsaCount?: number;

  @Metadata({ data: "json, name=rhsm" })
  rhsm?: string;

  @Metadata({ data: "json, name=stale" })
  stale?: boolean;

  @Metadata({ data: "json, name=stale_timestamp" })
  staleTimestamp?: string;

  @Metadata({ data: "json, name=stale_warning_timestamp" })
  staleWarningTimestamp?: string;

  @Metadata({ data: "json, name=third_party" })
  thirdParty?: boolean;
}
