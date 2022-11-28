import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PriceFormatted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american" })
  american?: string;

  @SpeakeasyMetadata({ data: "json, name=decimal" })
  decimal?: number;

  @SpeakeasyMetadata({ data: "json, name=fractional" })
  fractional?: string;
}
