import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesLineModeGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: string[];

  @Metadata({ data: "json, name=modeName" })
  modeName?: string;
}
