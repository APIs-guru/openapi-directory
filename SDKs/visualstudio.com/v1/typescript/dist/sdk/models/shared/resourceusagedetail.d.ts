import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeUsageDetail } from "./computeusagedetail";
import { StorageUsageDetail } from "./storageusagedetail";
export declare class ResourceUsageDetail extends SpeakeasyBase {
    compute?: ComputeUsageDetail[];
    storage?: StorageUsageDetail[];
}
