import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RuleNewTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RuleNew extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=directives" })
  directives?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: RuleNewTags })
  tags?: RuleNewTags[];

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];
}
