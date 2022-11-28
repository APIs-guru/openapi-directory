import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";



export class SecurityTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=direct_security_groups", elemType: Reference })
  directSecurityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=security_groups", elemType: Reference })
  securityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
