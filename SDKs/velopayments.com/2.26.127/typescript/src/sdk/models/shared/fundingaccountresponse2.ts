import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FundingAccountResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
