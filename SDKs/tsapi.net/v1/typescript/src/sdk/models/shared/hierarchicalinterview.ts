import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataItem } from "./dataitem";



export class HierarchicalInterviewLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;
}


export class HierarchicalInterview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataItems", elemType: DataItem })
  dataItems?: DataItem[];

  @SpeakeasyMetadata({ data: "json, name=hierarchicalInterviews", elemType: HierarchicalInterview })
  hierarchicalInterviews?: HierarchicalInterview[];

  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: HierarchicalInterviewLevel;
}
