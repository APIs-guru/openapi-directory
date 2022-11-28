import { SpeakeasyBase } from "../../../internal/utils";
import { VsoPlanInfo } from "./vsoplaninfo";
import { EnvironmentUsage } from "./environmentusage";
export declare class BillSummary extends SpeakeasyBase {
    billGenerationTime?: Date;
    environmentId?: string;
    id?: string;
    isFinalBill?: boolean;
    partitionKey?: string;
    periodEnd?: Date;
    periodStart?: Date;
    plan?: VsoPlanInfo;
    planIsDeleted?: boolean;
    usage?: Map<string, number>;
    usageDetail?: EnvironmentUsage[];
}
