import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesLineSpecificServiceType } from "./tflapipresentationentitieslinespecificservicetype";


export class TflApiPresentationEntitiesLineServiceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=lineSpecificServiceTypes", elemType: shared.TflApiPresentationEntitiesLineSpecificServiceType })
  lineSpecificServiceTypes?: TflApiPresentationEntitiesLineSpecificServiceType[];
}
