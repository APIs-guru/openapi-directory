import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vaccine } from "./vaccine";



export class VaccineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccinations", elemType: Vaccine })
  vaccinations?: Vaccine[];
}
