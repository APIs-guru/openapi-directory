import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuperFund } from "./superfund";


export class SuperFunds extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuperFunds", elemType: shared.SuperFund })
  superFunds?: SuperFund[];
}
