import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class SecurityTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=direct_security_groups", elemType: shared.Reference })
  directSecurityGroups?: Reference[];

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @Metadata({ data: "json, name=security_groups", elemType: shared.Reference })
  securityGroups?: Reference[];

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
