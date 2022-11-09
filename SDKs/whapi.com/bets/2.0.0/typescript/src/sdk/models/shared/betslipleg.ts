import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Betslippart } from "./betslippart";


export class Betslipleg extends SpeakeasyBase {
  @Metadata({ data: "json, name=parts", elemType: shared.Betslippart })
  parts: Betslippart[];

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
