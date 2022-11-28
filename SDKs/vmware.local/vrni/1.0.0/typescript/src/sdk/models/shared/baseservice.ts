import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";



export class BaseService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port_ranges", elemType: PortRange })
  portRanges?: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;
}
