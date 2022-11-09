import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeUsageDetail } from "./computeusagedetail";
import { StorageUsageDetail } from "./storageusagedetail";


export class ResourceUsageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=compute", elemType: shared.ComputeUsageDetail })
  compute?: ComputeUsageDetail[];

  @Metadata({ data: "json, name=storage", elemType: shared.StorageUsageDetail })
  storage?: StorageUsageDetail[];
}
