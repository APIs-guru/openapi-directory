import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RuleWithCategoryTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RuleWithCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=directives" })
  directives?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=system" })
  system?: boolean;

  @Metadata({ data: "json, name=tags", elemType: shared.RuleWithCategoryTags })
  tags?: RuleWithCategoryTags[];

  @Metadata({ data: "json, name=targets" })
  targets?: string[];
}
