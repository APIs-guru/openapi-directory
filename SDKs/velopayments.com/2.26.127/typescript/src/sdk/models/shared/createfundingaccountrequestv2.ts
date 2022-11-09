import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateFundingAccountRequestV2TypeEnum {
    Fbo = "FBO"
,    WubsDecoupled = "WUBS_DECOUPLED"
}


export class CreateFundingAccountRequestV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=payorId" })
  payorId: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @Metadata({ data: "json, name=type" })
  type: CreateFundingAccountRequestV2TypeEnum;
}
