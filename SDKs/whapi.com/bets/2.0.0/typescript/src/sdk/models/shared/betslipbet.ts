import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FreeBetDetail } from "./freebetdetail";
import { Betslipleg } from "./betslipleg";


export class Betslipbet extends SpeakeasyBase {
  @Metadata({ data: "json, name=betMultiplier" })
  betMultiplier?: number;

  @Metadata({ data: "json, name=freeBets", elemType: shared.FreeBetDetail })
  freeBets?: FreeBetDetail[];

  @Metadata({ data: "json, name=legs", elemType: shared.Betslipleg })
  legs: Betslipleg[];

  @Metadata({ data: "json, name=maxStake" })
  maxStake?: number;

  @Metadata({ data: "json, name=minStake" })
  minStake?: number;

  @Metadata({ data: "json, name=numLines" })
  numLines?: number;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=typeCode" })
  typeCode: string;

  @Metadata({ data: "json, name=typeName" })
  typeName?: string;
}
