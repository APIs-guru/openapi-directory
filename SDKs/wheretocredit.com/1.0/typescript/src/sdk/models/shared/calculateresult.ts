import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CalculateItineraryResult } from "./calculateitineraryresult";


export class CalculateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: CalculateItineraryResult;
}
