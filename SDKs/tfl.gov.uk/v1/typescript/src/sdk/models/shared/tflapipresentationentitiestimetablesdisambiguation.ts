import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesTimetablesDisambiguationOption } from "./tflapipresentationentitiestimetablesdisambiguationoption";



export class TflApiPresentationEntitiesTimetablesDisambiguation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disambiguationOptions", elemType: TflApiPresentationEntitiesTimetablesDisambiguationOption })
  disambiguationOptions?: TflApiPresentationEntitiesTimetablesDisambiguationOption[];
}
