import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FreeBetDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=awardDateTime" })
  awardDateTime?: string;

  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=expiryDateTime" })
  expiryDateTime?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=offerDesc" })
  offerDesc?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: number;

  @Metadata({ data: "json, name=offerName" })
  offerName: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}
