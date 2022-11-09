import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesTimetablesDisambiguationOption } from "./tflapipresentationentitiestimetablesdisambiguationoption";


export class TflApiPresentationEntitiesTimetablesDisambiguation extends SpeakeasyBase {
  @Metadata({ data: "json, name=disambiguationOptions", elemType: shared.TflApiPresentationEntitiesTimetablesDisambiguationOption })
  disambiguationOptions?: TflApiPresentationEntitiesTimetablesDisambiguationOption[];
}
