import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerProfileEvaluationEnumStatusEnum } from "./customerprofileevaluationenumstatusenum";


export class TrusthubV1CustomerProfileCustomerProfileEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=policy_sid" })
  policySid?: string;

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: CustomerProfileEvaluationEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
