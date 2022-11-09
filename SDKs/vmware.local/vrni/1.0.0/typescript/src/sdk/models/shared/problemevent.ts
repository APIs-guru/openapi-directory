import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";

export enum ProblemEventAdminStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum ProblemEventSeverityEnum {
    Critical = "CRITICAL"
,    Moderate = "MODERATE"
,    Warning = "WARNING"
,    Info = "INFO"
}


export class ProblemEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_state" })
  adminState?: ProblemEventAdminStateEnum;

  @Metadata({ data: "json, name=anchor_entities", elemType: shared.Reference })
  anchorEntities?: Reference[];

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=event_close_time_epoch_ms" })
  eventCloseTimeEpochMs?: number;

  @Metadata({ data: "json, name=event_tags" })
  eventTags?: string[];

  @Metadata({ data: "json, name=event_time_epoch_ms" })
  eventTimeEpochMs?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=related_entities", elemType: shared.Reference })
  relatedEntities?: Reference[];

  @Metadata({ data: "json, name=severity" })
  severity?: ProblemEventSeverityEnum;
}
