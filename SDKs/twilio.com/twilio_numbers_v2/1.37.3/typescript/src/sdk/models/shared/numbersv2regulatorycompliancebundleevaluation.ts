import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationEnumStatusEnum } from "./evaluationenumstatusenum";



export class NumbersV2RegulatoryComplianceBundleEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=regulation_sid" })
  regulationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EvaluationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
