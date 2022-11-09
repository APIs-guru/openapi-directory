import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hierarchy } from "./hierarchy";
import { Language } from "./language";
import { Variable } from "./variable";


export class SurveyMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=hierarchies", elemType: shared.Hierarchy })
  hierarchies?: Hierarchy[];

  @Metadata({ data: "json, name=interviewCount" })
  interviewCount?: number;

  @Metadata({ data: "json, name=languages", elemType: shared.Language })
  languages?: Language[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=variables", elemType: shared.Variable })
  variables?: Variable[];
}
