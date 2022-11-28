import { SpeakeasyBase } from "../../../internal/utils";
export declare class Device extends SpeakeasyBase {
    attributes?: Map<string, any>;
    category?: string;
    contact?: string;
    disabled?: boolean;
    geofenceIds?: number[];
    groupId?: number;
    id?: number;
    lastUpdate?: Date;
    model?: string;
    name?: string;
    phone?: string;
    positionId?: number;
    status?: string;
    uniqueId?: string;
}
