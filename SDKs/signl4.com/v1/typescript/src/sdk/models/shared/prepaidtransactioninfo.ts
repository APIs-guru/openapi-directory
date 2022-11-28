import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrepaidTransactionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoTopUpId" })
  autoTopUpId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=packageCode" })
  packageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
