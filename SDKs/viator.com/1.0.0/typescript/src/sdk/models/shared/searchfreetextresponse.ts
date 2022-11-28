import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SearchFreetextResponseSearchTypeEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}


export class SearchFreetextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: SearchFreetextResponseSearchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
