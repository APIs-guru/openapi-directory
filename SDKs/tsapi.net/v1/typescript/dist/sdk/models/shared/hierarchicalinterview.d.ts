import { SpeakeasyBase } from "../../../internal/utils";
import { DataItem } from "./dataitem";
export declare class HierarchicalInterviewLevel extends SpeakeasyBase {
    ident?: string;
}
export declare class HierarchicalInterview extends SpeakeasyBase {
    dataItems?: DataItem[];
    hierarchicalInterviews?: HierarchicalInterview[];
    ident?: string;
    level?: HierarchicalInterviewLevel;
}
