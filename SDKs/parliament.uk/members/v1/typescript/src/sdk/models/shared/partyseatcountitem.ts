import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { PartySeatCount } from "./partyseatcount";


export class PartySeatCountItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=value" })
  value?: PartySeatCount;
}
