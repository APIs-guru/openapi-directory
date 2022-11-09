import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacedBetLeg } from "./placedbetleg";


export class PlacedBet extends SpeakeasyBase {
  @Metadata({ data: "json, name=cashinValue" })
  cashinValue?: number;

  @Metadata({ data: "json, name=estimatedReturns" })
  estimatedReturns: number;

  @Metadata({ data: "json, name=freeBetValue" })
  freeBetValue?: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=legs", elemType: shared.PlacedBetLeg })
  legs?: PlacedBetLeg[];

  @Metadata({ data: "json, name=numLines" })
  numLines?: number;

  @Metadata({ data: "json, name=numSelections" })
  numSelections?: number;

  @Metadata({ data: "json, name=receipt" })
  receipt?: string;

  @Metadata({ data: "json, name=settled" })
  settled: boolean;

  @Metadata({ data: "json, name=stake" })
  stake: number;

  @Metadata({ data: "json, name=stakePerLine" })
  stakePerLine?: number;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=transDateTime" })
  transDateTime: string;

  @Metadata({ data: "json, name=typeCode" })
  typeCode: string;

  @Metadata({ data: "json, name=typeName" })
  typeName: string;

  @Metadata({ data: "json, name=winnings" })
  winnings: number;
}
