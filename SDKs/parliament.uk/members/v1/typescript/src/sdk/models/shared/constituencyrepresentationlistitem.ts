import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { ConstituencyRepresentation } from "./constituencyrepresentation";


export class ConstituencyRepresentationListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=value", elemType: shared.ConstituencyRepresentation })
  value?: ConstituencyRepresentation[];
}
