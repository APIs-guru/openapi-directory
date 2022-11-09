import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesTimetablesDisambiguation } from "./tflapipresentationentitiestimetablesdisambiguation";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesTimetable } from "./tflapipresentationentitiestimetable";


export class TflApiPresentationEntitiesTimetableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=disambiguation" })
  disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=pdfUrl" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=stations", elemType: shared.TflApiPresentationEntitiesMatchedStop })
  stations?: TflApiPresentationEntitiesMatchedStop[];

  @Metadata({ data: "json, name=statusErrorMessage" })
  statusErrorMessage?: string;

  @Metadata({ data: "json, name=stops", elemType: shared.TflApiPresentationEntitiesMatchedStop })
  stops?: TflApiPresentationEntitiesMatchedStop[];

  @Metadata({ data: "json, name=timetable" })
  timetable?: TflApiPresentationEntitiesTimetable;
}
