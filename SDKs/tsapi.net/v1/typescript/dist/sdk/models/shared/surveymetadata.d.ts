import { SpeakeasyBase } from "../../../internal/utils";
import { Hierarchy } from "./hierarchy";
import { Language } from "./language";
import { Variable } from "./variable";
export declare class SurveyMetadata extends SpeakeasyBase {
    hierarchies?: Hierarchy[];
    interviewCount?: number;
    languages?: Language[];
    name?: string;
    title?: string;
    variables?: Variable[];
}
