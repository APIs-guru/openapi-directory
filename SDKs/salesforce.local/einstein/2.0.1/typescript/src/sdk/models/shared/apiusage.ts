import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanData } from "./plandata";


export class ApiUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=endsAt" })
  endsAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=licenseId" })
  licenseId?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=planData", elemType: shared.PlanData })
  planData?: PlanData[];

  @Metadata({ data: "json, name=predictionsMax" })
  predictionsMax?: number;

  @Metadata({ data: "json, name=predictionsUsed" })
  predictionsUsed?: number;

  @Metadata({ data: "json, name=startsAt" })
  startsAt?: Date;
}
