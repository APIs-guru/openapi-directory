import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Vaccine } from "./vaccine";


export class VaccineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=age" })
  age?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vaccinations", elemType: shared.Vaccine })
  vaccinations?: Vaccine[];
}
