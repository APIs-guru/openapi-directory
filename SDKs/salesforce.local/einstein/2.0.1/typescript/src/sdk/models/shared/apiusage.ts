import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanData } from "./plandata";



export class ApiUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endsAt" })
  endsAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseId" })
  licenseId?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=planData", elemType: PlanData })
  planData?: PlanData[];

  @SpeakeasyMetadata({ data: "json, name=predictionsMax" })
  predictionsMax?: number;

  @SpeakeasyMetadata({ data: "json, name=predictionsUsed" })
  predictionsUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=startsAt" })
  startsAt?: Date;
}
