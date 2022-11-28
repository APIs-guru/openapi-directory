import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanResourceIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
