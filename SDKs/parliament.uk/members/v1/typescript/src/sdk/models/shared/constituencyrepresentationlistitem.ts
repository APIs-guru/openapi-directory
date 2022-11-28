import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { ConstituencyRepresentation } from "./constituencyrepresentation";



export class ConstituencyRepresentationListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value", elemType: ConstituencyRepresentation })
  value?: ConstituencyRepresentation[];
}
