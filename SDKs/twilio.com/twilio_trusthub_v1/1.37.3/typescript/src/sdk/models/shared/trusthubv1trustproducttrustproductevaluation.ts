import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustProductEvaluationEnumStatusEnum } from "./trustproductevaluationenumstatusenum";



export class TrusthubV1TrustProductTrustProductEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=policy_sid" })
  policySid?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TrustProductEvaluationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
