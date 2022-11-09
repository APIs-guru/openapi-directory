import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";


export class BaseService extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port_ranges", elemType: shared.PortRange })
  portRanges?: PortRange[];

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;
}
