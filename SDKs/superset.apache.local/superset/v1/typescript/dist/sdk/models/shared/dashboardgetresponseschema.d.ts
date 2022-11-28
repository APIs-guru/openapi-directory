import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Roles } from "./roles";
export declare class DashboardGetResponseSchema extends SpeakeasyBase {
    changedBy?: User;
    changedByName?: string;
    changedByUrl?: string;
    changedOn?: Date;
    changedOnDeltaHumanized?: string;
    charts?: string[];
    css?: string;
    dashboardTitle?: string;
    id?: number;
    jsonMetadata?: string;
    owners?: User[];
    positionJson?: string;
    published?: boolean;
    roles?: Roles[];
    slug?: string;
    tableNames?: string;
    thumbnailUrl?: string;
    url?: string;
}
