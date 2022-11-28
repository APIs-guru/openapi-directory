import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { ElectionResult } from "./electionresult";



export class ElectionResultListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value", elemType: ElectionResult })
  value?: ElectionResult[];
}
