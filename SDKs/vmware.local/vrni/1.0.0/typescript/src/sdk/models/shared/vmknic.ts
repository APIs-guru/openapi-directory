import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { Vlan } from "./vlan";



export class Vmknic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: Reference;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: IpV4Address })
  ipAddresses?: IpV4Address[];

  @SpeakeasyMetadata({ data: "json, name=layer2_network" })
  layer2Network?: Reference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: Vlan;
}
