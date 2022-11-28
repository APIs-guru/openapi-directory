import { SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";
/**
 * Backup team called in, may be null.
**/
export declare class EliminationAllianceBackup extends SpeakeasyBase {
    in?: string;
    out?: string;
}
export declare class EliminationAllianceStatus extends SpeakeasyBase {
    currentLevelRecord?: WltRecord;
    level?: string;
    playoffAverage?: number;
    record?: WltRecord;
    status?: string;
}
export declare class EliminationAlliance extends SpeakeasyBase {
    backup?: EliminationAllianceBackup;
    declines?: string[];
    name?: string;
    picks: string[];
    status?: EliminationAllianceStatus;
}
