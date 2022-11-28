import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CategoryGoalTypeEnum {
    Tb = "TB",
    Tbd = "TBD",
    Mf = "MF",
    Need = "NEED"
}
export declare class Category extends SpeakeasyBase {
    activity: number;
    balance: number;
    budgeted: number;
    categoryGroupId: string;
    deleted: boolean;
    goalCreationMonth?: Date;
    goalMonthsToBudget?: number;
    goalOverallFunded?: number;
    goalOverallLeft?: number;
    goalPercentageComplete?: number;
    goalTarget?: number;
    goalTargetMonth?: Date;
    goalType?: CategoryGoalTypeEnum;
    goalUnderFunded?: number;
    hidden: boolean;
    id: string;
    name: string;
    note?: string;
    originalCategoryGroupId?: string;
}
