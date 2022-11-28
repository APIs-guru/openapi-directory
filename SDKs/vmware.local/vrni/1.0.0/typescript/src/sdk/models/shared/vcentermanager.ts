import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";



export class VCenterManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: IpV4Address;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=vm" })
  vm?: Reference;
}
