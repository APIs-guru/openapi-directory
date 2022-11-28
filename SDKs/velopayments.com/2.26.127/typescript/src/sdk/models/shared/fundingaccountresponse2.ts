import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingAccountResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
