import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectiveNewTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class DirectiveNew extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=system" })
  system?: boolean;

  @Metadata({ data: "json, name=tags", elemType: shared.DirectiveNewTags })
  tags?: DirectiveNewTags[];

  @Metadata({ data: "json, name=techniqueName" })
  techniqueName?: string;

  @Metadata({ data: "json, name=techniqueVersion" })
  techniqueVersion?: string;
}
