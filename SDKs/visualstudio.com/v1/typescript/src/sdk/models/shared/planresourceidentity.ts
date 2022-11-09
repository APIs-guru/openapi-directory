import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlanResourceIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=principalId" })
  principalId?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
