import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CalculateItineraryProgramResult } from "./calculateitineraryprogramresult";


export class CalculateItineraryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=totals", elemType: shared.CalculateItineraryProgramResult })
  totals?: CalculateItineraryProgramResult[];
}
