import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesSearchMatch } from "./tflapipresentationentitiessearchmatch";


export class TflApiPresentationEntitiesSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: number;

  @Metadata({ data: "json, name=matches", elemType: shared.TflApiPresentationEntitiesSearchMatch })
  matches?: TflApiPresentationEntitiesSearchMatch[];

  @Metadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
