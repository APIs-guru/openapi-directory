import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritePermissions extends SpeakeasyBase {
    canAdd?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    maxDailyActions?: number;
    minSecondsBetweenActions?: number;
    objectType?: string;
    userId?: number;
}
