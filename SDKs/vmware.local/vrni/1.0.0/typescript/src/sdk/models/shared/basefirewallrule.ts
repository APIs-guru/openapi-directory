import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallActionEnum } from "./firewallactionenum";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class BaseFirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FirewallActionEnum;

  @Metadata({ data: "json, name=destination_any" })
  destinationAny?: boolean;

  @Metadata({ data: "json, name=destination_inversion" })
  destinationInversion?: boolean;

  @Metadata({ data: "json, name=destinations", elemType: shared.Reference })
  destinations?: Reference[];

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port_ranges", elemType: shared.PortRange })
  portRanges?: PortRange[];

  @Metadata({ data: "json, name=rule_id" })
  ruleId?: string;

  @Metadata({ data: "json, name=section_id" })
  sectionId?: string;

  @Metadata({ data: "json, name=section_name" })
  sectionName?: string;

  @Metadata({ data: "json, name=sequence_number" })
  sequenceNumber?: number;

  @Metadata({ data: "json, name=service_any" })
  serviceAny?: boolean;

  @Metadata({ data: "json, name=services", elemType: shared.Reference })
  services?: Reference[];

  @Metadata({ data: "json, name=source_any" })
  sourceAny?: boolean;

  @Metadata({ data: "json, name=source_inversion" })
  sourceInversion?: boolean;

  @Metadata({ data: "json, name=sources", elemType: shared.Reference })
  sources?: Reference[];
}
