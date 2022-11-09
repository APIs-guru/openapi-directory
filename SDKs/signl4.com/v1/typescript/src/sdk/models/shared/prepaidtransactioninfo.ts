import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PrepaidTransactionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoTopUpId" })
  autoTopUpId?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=credits" })
  credits?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: Date;

  @Metadata({ data: "json, name=packageCode" })
  packageCode?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
