import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceUsageDetail } from "./resourceusagedetail";
import { Sku } from "./sku";
export declare class EnvironmentUsage extends SpeakeasyBase {
    endState?: number;
    id?: string;
    resourceUsage?: ResourceUsageDetail;
    sku?: Sku;
    usage?: Map<string, number>;
}
