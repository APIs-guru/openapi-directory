import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
import { Variable } from "./variable";
export declare class HierarchyMetadata extends SpeakeasyBase {
    interviewCount?: number;
    languages?: Language[];
    name?: string;
    title?: string;
    variables?: Variable[];
}
export declare class HierarchyParent extends SpeakeasyBase {
    level?: string;
    linkVar?: string;
    ordered?: boolean;
}
export declare class Hierarchy extends SpeakeasyBase {
    ident?: string;
    metadata?: HierarchyMetadata;
    parent?: HierarchyParent;
}
