import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperFund } from "./superfund";



export class SuperFunds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuperFunds", elemType: SuperFund })
  superFunds?: SuperFund[];
}
