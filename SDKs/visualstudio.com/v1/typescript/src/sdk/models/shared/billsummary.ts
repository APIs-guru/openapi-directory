import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VsoPlanInfo } from "./vsoplaninfo";
import { EnvironmentUsage } from "./environmentusage";



export class BillSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billGenerationTime" })
  billGenerationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isFinalBill" })
  isFinalBill?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=periodEnd" })
  periodEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=periodStart" })
  periodStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: VsoPlanInfo;

  @SpeakeasyMetadata({ data: "json, name=planIsDeleted" })
  planIsDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=usageDetail", elemType: EnvironmentUsage })
  usageDetail?: EnvironmentUsage[];
}
