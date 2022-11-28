import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalculateItineraryProgramResult } from "./calculateitineraryprogramresult";



export class CalculateItineraryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=totals", elemType: CalculateItineraryProgramResult })
  totals?: CalculateItineraryProgramResult[];
}
