import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlanResourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, name=clientTenantId" })
  clientTenantId?: string;

  @Metadata({ data: "header, name=homeTenantId" })
  homeTenantId?: string;

  @Metadata({ data: "header, name=identityPrincipalId" })
  identityPrincipalId?: string;

  @Metadata({ data: "header, name=identityUrl" })
  identityUrl?: string;
}
