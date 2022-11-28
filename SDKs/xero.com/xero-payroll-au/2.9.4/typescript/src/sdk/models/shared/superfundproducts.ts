import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperFundProduct } from "./superfundproduct";



export class SuperFundProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuperFundProducts", elemType: SuperFundProduct })
  superFundProducts?: SuperFundProduct[];
}
