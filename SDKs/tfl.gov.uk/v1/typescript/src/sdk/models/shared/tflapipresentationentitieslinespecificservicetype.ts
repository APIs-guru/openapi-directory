import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesLineServiceTypeInfo } from "./tflapipresentationentitieslineservicetypeinfo";



export class TflApiPresentationEntitiesLineSpecificServiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: TflApiPresentationEntitiesLineServiceTypeInfo;

  @SpeakeasyMetadata({ data: "json, name=stopServesServiceType" })
  stopServesServiceType?: boolean;
}
