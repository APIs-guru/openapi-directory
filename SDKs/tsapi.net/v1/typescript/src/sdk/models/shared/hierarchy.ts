import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
import { Variable } from "./variable";



export class HierarchyMetadata extends SpeakeasyBase {
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


export class HierarchyParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=linkVar" })
  linkVar?: string;

  @SpeakeasyMetadata({ data: "json, name=ordered" })
  ordered?: boolean;
}


export class Hierarchy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: HierarchyMetadata;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: HierarchyParent;
}
