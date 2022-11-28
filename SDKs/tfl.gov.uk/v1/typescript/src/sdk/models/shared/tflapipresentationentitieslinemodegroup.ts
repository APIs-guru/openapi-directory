import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesLineModeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: string[];

  @SpeakeasyMetadata({ data: "json, name=modeName" })
  modeName?: string;
}
