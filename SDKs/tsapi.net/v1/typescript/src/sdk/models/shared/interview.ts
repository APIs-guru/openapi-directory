import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataItem } from "./dataitem";
import { HierarchicalInterview } from "./hierarchicalinterview";


export class Interview extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataItems", elemType: shared.DataItem })
  dataItems?: DataItem[];

  @Metadata({ data: "json, name=hierarchicalInterviews", elemType: shared.HierarchicalInterview })
  hierarchicalInterviews?: HierarchicalInterview[];

  @Metadata({ data: "json, name=ident" })
  ident?: string;
}
