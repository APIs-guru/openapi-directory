import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { GovernmentOppositionPost } from "./governmentoppositionpost";


export class GovernmentOppositionPostItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=value" })
  value?: GovernmentOppositionPost;
}
