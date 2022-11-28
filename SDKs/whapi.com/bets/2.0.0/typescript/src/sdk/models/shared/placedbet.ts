import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacedBetLeg } from "./placedbetleg";



export class PlacedBet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cashinValue" })
  cashinValue?: number;

  @SpeakeasyMetadata({ data: "json, name=estimatedReturns" })
  estimatedReturns: number;

  @SpeakeasyMetadata({ data: "json, name=freeBetValue" })
  freeBetValue?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=legs", elemType: PlacedBetLeg })
  legs?: PlacedBetLeg[];

  @SpeakeasyMetadata({ data: "json, name=numLines" })
  numLines?: number;

  @SpeakeasyMetadata({ data: "json, name=numSelections" })
  numSelections?: number;

  @SpeakeasyMetadata({ data: "json, name=receipt" })
  receipt?: string;

  @SpeakeasyMetadata({ data: "json, name=settled" })
  settled: boolean;

  @SpeakeasyMetadata({ data: "json, name=stake" })
  stake: number;

  @SpeakeasyMetadata({ data: "json, name=stakePerLine" })
  stakePerLine?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=transDateTime" })
  transDateTime: string;

  @SpeakeasyMetadata({ data: "json, name=typeCode" })
  typeCode: string;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName: string;

  @SpeakeasyMetadata({ data: "json, name=winnings" })
  winnings: number;
}
