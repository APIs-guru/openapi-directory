import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustProductEvaluationEnumStatusEnum } from "./trustproductevaluationenumstatusenum";


export class TrusthubV1TrustProductTrustProductEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=policy_sid" })
  policySid?: string;

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: TrustProductEvaluationEnumStatusEnum;

  @Metadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
