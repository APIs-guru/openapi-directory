import { SpeakeasyBase } from "../../../internal/utils";
import { PlanData } from "./plandata";
export declare class ApiUsage extends SpeakeasyBase {
    endsAt?: Date;
    id?: string;
    licenseId?: string;
    object?: string;
    organizationId?: string;
    planData?: PlanData[];
    predictionsMax?: number;
    predictionsUsed?: number;
    startsAt?: Date;
}
