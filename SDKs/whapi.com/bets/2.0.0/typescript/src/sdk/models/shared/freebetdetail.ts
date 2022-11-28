import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FreeBetDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awardDateTime" })
  awardDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryDateTime" })
  expiryDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=offerDesc" })
  offerDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: number;

  @SpeakeasyMetadata({ data: "json, name=offerName" })
  offerName: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
