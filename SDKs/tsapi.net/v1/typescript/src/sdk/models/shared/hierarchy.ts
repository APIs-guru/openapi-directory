import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Language } from "./language";
import { Variable } from "./variable";


export class HierarchyMetadata extends SpeakeasyBase {
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


export class HierarchyParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=linkVar" })
  linkVar?: string;

  @Metadata({ data: "json, name=ordered" })
  ordered?: boolean;
}


export class Hierarchy extends SpeakeasyBase {
  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: HierarchyMetadata;

  @Metadata({ data: "json, name=parent" })
  parent?: HierarchyParent;
}
