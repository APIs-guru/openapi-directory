import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Betslippart } from "./betslippart";



export class Betslipleg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parts", elemType: Betslippart })
  parts: Betslippart[];

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
