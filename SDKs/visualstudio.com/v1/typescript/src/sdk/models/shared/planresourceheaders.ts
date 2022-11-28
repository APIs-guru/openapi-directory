import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanResourceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, name=clientTenantId" })
  clientTenantId?: string;

  @SpeakeasyMetadata({ data: "header, name=homeTenantId" })
  homeTenantId?: string;

  @SpeakeasyMetadata({ data: "header, name=identityPrincipalId" })
  identityPrincipalId?: string;

  @SpeakeasyMetadata({ data: "header, name=identityUrl" })
  identityUrl?: string;
}
