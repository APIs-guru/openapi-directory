import { SpeakeasyBase } from "../../../internal/utils";
export declare class OverviewEvent extends SpeakeasyBase {
    acknowledgedAlerts?: string[];
    alertId?: string;
    categoryId?: string;
    closedAlerts?: string[];
    creationTime?: Date;
    eventSourceType?: number;
    eventStatus?: number;
    id?: string;
    lastModified?: Date;
    severity?: number;
    teamId?: string;
    text?: string;
    title?: string;
}
