import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataItem } from "./dataitem";
import { HierarchicalInterview } from "./hierarchicalinterview";



export class Interview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataItems", elemType: DataItem })
  dataItems?: DataItem[];

  @SpeakeasyMetadata({ data: "json, name=hierarchicalInterviews", elemType: HierarchicalInterview })
  hierarchicalInterviews?: HierarchicalInterview[];

  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;
}
