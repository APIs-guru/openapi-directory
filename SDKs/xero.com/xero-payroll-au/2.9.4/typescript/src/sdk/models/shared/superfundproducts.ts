import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuperFundProduct } from "./superfundproduct";


export class SuperFundProducts extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuperFundProducts", elemType: shared.SuperFundProduct })
  superFundProducts?: SuperFundProduct[];
}
