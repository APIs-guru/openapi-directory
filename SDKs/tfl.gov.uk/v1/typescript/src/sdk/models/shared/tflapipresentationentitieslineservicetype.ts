import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesLineSpecificServiceType } from "./tflapipresentationentitieslinespecificservicetype";



export class TflApiPresentationEntitiesLineServiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=lineSpecificServiceTypes", elemType: TflApiPresentationEntitiesLineSpecificServiceType })
  lineSpecificServiceTypes?: TflApiPresentationEntitiesLineSpecificServiceType[];
}
