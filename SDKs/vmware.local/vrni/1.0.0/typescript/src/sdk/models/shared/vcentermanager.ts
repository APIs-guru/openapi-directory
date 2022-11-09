import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class VCenterManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: IpV4Address;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @Metadata({ data: "json, name=vm" })
  vm?: Reference;
}
