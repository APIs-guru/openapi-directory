import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalculateItineraryResult } from "./calculateitineraryresult";



export class CalculateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: CalculateItineraryResult;
}
