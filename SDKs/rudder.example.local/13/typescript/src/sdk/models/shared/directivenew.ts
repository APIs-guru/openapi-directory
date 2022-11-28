import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DirectiveNewTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class DirectiveNew extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: DirectiveNewTags })
  tags?: DirectiveNewTags[];

  @SpeakeasyMetadata({ data: "json, name=techniqueName" })
  techniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=techniqueVersion" })
  techniqueVersion?: string;
}
