import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BetPlaced extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=numLines" })
  numLines?: number;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=placedDateTime" })
  placedDateTime?: string;

  @Metadata({ data: "json, name=receipt" })
  receipt: string;

  @Metadata({ data: "json, name=totalStake" })
  totalStake?: number;
}
