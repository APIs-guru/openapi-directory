import { SpeakeasyBase } from "../../../internal/utils";
import { DataItem } from "./dataitem";
import { HierarchicalInterview } from "./hierarchicalinterview";
export declare class Interview extends SpeakeasyBase {
    dataItems?: DataItem[];
    hierarchicalInterviews?: HierarchicalInterview[];
    ident?: string;
}
