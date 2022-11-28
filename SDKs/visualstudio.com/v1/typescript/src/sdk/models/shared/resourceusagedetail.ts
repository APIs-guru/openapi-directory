import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeUsageDetail } from "./computeusagedetail";
import { StorageUsageDetail } from "./storageusagedetail";



export class ResourceUsageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compute", elemType: ComputeUsageDetail })
  compute?: ComputeUsageDetail[];

  @SpeakeasyMetadata({ data: "json, name=storage", elemType: StorageUsageDetail })
  storage?: StorageUsageDetail[];
}
