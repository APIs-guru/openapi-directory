import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateFundingAccountRequestV2TypeEnum {
    Fbo = "FBO",
    WubsDecoupled = "WUBS_DECOUPLED"
}


export class CreateFundingAccountRequestV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateFundingAccountRequestV2TypeEnum;
}
