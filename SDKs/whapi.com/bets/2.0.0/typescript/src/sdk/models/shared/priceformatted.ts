import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PriceFormatted extends SpeakeasyBase {
  @Metadata({ data: "json, name=american" })
  american?: string;

  @Metadata({ data: "json, name=decimal" })
  decimal?: number;

  @Metadata({ data: "json, name=fractional" })
  fractional?: string;
}
