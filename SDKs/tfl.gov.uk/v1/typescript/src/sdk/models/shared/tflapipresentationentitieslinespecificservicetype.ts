import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesLineServiceTypeInfo } from "./tflapipresentationentitieslineservicetypeinfo";


export class TflApiPresentationEntitiesLineSpecificServiceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceType" })
  serviceType?: TflApiPresentationEntitiesLineServiceTypeInfo;

  @Metadata({ data: "json, name=stopServesServiceType" })
  stopServesServiceType?: boolean;
}
