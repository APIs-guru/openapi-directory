import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataItem } from "./dataitem";
import { HierarchicalInterview } from "./hierarchicalinterview";


export class HierarchicalInterviewLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ident" })
  ident?: string;
}


export class HierarchicalInterview extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataItems", elemType: shared.DataItem })
  dataItems?: DataItem[];

  @Metadata({ data: "json, name=hierarchicalInterviews", elemType: shared.HierarchicalInterview })
  hierarchicalInterviews?: HierarchicalInterview[];

  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=level" })
  level?: HierarchicalInterviewLevel;
}
