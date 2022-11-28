import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfileEvaluationEnumStatusEnum } from "./customerprofileevaluationenumstatusenum";



export class TrusthubV1CustomerProfileCustomerProfileEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=policy_sid" })
  policySid?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CustomerProfileEvaluationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
