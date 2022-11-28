import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallActionEnum } from "./firewallactionenum";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";



export class BaseFirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FirewallActionEnum;

  @SpeakeasyMetadata({ data: "json, name=destination_any" })
  destinationAny?: boolean;

  @SpeakeasyMetadata({ data: "json, name=destination_inversion" })
  destinationInversion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Reference })
  destinations?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port_ranges", elemType: PortRange })
  portRanges?: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=rule_id" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=section_id" })
  sectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=section_name" })
  sectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence_number" })
  sequenceNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=service_any" })
  serviceAny?: boolean;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Reference })
  services?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_any" })
  sourceAny?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source_inversion" })
  sourceInversion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Reference })
  sources?: Reference[];
}
