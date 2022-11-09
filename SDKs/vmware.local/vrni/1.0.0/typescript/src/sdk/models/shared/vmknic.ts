import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Vlan } from "./vlan";


export class Vmknic extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=host" })
  host?: Reference;

  @Metadata({ data: "json, name=ip_addresses", elemType: shared.IpV4Address })
  ipAddresses?: IpV4Address[];

  @Metadata({ data: "json, name=layer2_network" })
  layer2Network?: Reference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: Vlan;
}
