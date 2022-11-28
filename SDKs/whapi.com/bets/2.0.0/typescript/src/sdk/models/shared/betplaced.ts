import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BetPlaced extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=numLines" })
  numLines?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=placedDateTime" })
  placedDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt" })
  receipt: string;

  @SpeakeasyMetadata({ data: "json, name=totalStake" })
  totalStake?: number;
}
