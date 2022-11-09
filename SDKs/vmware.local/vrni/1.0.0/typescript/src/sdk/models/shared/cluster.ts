import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @Metadata({ data: "json, name=num_cpu_cores" })
  numCpuCores?: number;

  @Metadata({ data: "json, name=num_datastores" })
  numDatastores?: number;

  @Metadata({ data: "json, name=num_hosts" })
  numHosts?: number;

  @Metadata({ data: "json, name=total_cpus" })
  totalCpus?: number;

  @Metadata({ data: "json, name=total_memory" })
  totalMemory?: number;

  @Metadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
