import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationEnumStatusEnum } from "./evaluationenumstatusenum";


export class NumbersV2RegulatoryComplianceBundleEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=regulation_sid" })
  regulationSid?: string;

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: EvaluationEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
