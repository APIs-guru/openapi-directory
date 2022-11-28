import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export declare enum ProblemEventAdminStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum ProblemEventSeverityEnum {
    Critical = "CRITICAL",
    Moderate = "MODERATE",
    Warning = "WARNING",
    Info = "INFO"
}
export declare class ProblemEvent extends SpeakeasyBase {
    adminState?: ProblemEventAdminStateEnum;
    anchorEntities?: Reference[];
    archived?: boolean;
    entityId?: string;
    entityType?: EntityTypeEnum;
    eventCloseTimeEpochMs?: number;
    eventTags?: string[];
    eventTimeEpochMs?: number;
    message?: string;
    name?: string;
    relatedEntities?: Reference[];
    severity?: ProblemEventSeverityEnum;
}
