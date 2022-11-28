import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";



export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=num_cpu_cores" })
  numCpuCores?: number;

  @SpeakeasyMetadata({ data: "json, name=num_datastores" })
  numDatastores?: number;

  @SpeakeasyMetadata({ data: "json, name=num_hosts" })
  numHosts?: number;

  @SpeakeasyMetadata({ data: "json, name=total_cpus" })
  totalCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=total_memory" })
  totalMemory?: number;

  @SpeakeasyMetadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
