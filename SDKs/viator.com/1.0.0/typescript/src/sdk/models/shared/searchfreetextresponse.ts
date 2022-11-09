import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SearchFreetextResponseSearchTypeEnum {
    Product = "PRODUCT"
,    Destination = "DESTINATION"
,    Attraction = "ATTRACTION"
,    Recommendation = "RECOMMENDATION"
}


export class SearchFreetextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=searchType" })
  searchType?: SearchFreetextResponseSearchTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
