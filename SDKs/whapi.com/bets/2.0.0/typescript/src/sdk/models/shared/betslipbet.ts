import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeBetDetail } from "./freebetdetail";
import { Betslipleg } from "./betslipleg";



export class Betslipbet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betMultiplier" })
  betMultiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=freeBets", elemType: FreeBetDetail })
  freeBets?: FreeBetDetail[];

  @SpeakeasyMetadata({ data: "json, name=legs", elemType: Betslipleg })
  legs: Betslipleg[];

  @SpeakeasyMetadata({ data: "json, name=maxStake" })
  maxStake?: number;

  @SpeakeasyMetadata({ data: "json, name=minStake" })
  minStake?: number;

  @SpeakeasyMetadata({ data: "json, name=numLines" })
  numLines?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=typeCode" })
  typeCode: string;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;
}
