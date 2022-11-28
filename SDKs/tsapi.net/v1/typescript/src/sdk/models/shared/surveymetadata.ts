import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hierarchy } from "./hierarchy";
import { Language } from "./language";
import { Variable } from "./variable";



export class SurveyMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hierarchies", elemType: Hierarchy })
  hierarchies?: Hierarchy[];

  @SpeakeasyMetadata({ data: "json, name=interviewCount" })
  interviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: Language })
  languages?: Language[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable })
  variables?: Variable[];
}
