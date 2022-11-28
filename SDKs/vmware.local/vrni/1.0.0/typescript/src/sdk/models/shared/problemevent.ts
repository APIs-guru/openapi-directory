import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";


export enum ProblemEventAdminStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum ProblemEventSeverityEnum {
    Critical = "CRITICAL",
    Moderate = "MODERATE",
    Warning = "WARNING",
    Info = "INFO"
}


export class ProblemEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_state" })
  adminState?: ProblemEventAdminStateEnum;

  @SpeakeasyMetadata({ data: "json, name=anchor_entities", elemType: Reference })
  anchorEntities?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=event_close_time_epoch_ms" })
  eventCloseTimeEpochMs?: number;

  @SpeakeasyMetadata({ data: "json, name=event_tags" })
  eventTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=event_time_epoch_ms" })
  eventTimeEpochMs?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=related_entities", elemType: Reference })
  relatedEntities?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: ProblemEventSeverityEnum;
}
