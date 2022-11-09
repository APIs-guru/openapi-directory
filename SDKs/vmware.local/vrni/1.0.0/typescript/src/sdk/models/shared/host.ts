import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class Host extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Reference;

  @Metadata({ data: "json, name=connection_state" })
  connectionState?: string;

  @Metadata({ data: "json, name=datastores", elemType: shared.Reference })
  datastores?: Reference[];

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=maintenance_mode" })
  maintenanceMode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @Metadata({ data: "json, name=service_tag" })
  serviceTag?: string;

  @Metadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;

  @Metadata({ data: "json, name=vm_count" })
  vmCount?: number;

  @Metadata({ data: "json, name=vmknics", elemType: shared.Reference })
  vmknics?: Reference[];
}
