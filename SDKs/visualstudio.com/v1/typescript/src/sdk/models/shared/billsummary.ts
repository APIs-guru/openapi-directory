import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VsoPlanInfo } from "./vsoplaninfo";
import { EnvironmentUsage } from "./environmentusage";


export class BillSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=billGenerationTime" })
  billGenerationTime?: Date;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isFinalBill" })
  isFinalBill?: boolean;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @Metadata({ data: "json, name=periodEnd" })
  periodEnd?: Date;

  @Metadata({ data: "json, name=periodStart" })
  periodStart?: Date;

  @Metadata({ data: "json, name=plan" })
  plan?: VsoPlanInfo;

  @Metadata({ data: "json, name=planIsDeleted" })
  planIsDeleted?: boolean;

  @Metadata({ data: "json, name=usage" })
  usage?: Map<string, number>;

  @Metadata({ data: "json, name=usageDetail", elemType: shared.EnvironmentUsage })
  usageDetail?: EnvironmentUsage[];
}
