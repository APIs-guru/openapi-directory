import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesSearchMatch } from "./tflapipresentationentitiessearchmatch";



export class TflApiPresentationEntitiesSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: TflApiPresentationEntitiesSearchMatch })
  matches?: TflApiPresentationEntitiesSearchMatch[];

  @SpeakeasyMetadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
