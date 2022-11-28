import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesTimetablesDisambiguation } from "./tflapipresentationentitiestimetablesdisambiguation";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesTimetable } from "./tflapipresentationentitiestimetable";



export class TflApiPresentationEntitiesTimetableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=disambiguation" })
  disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=pdfUrl" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=stations", elemType: TflApiPresentationEntitiesMatchedStop })
  stations?: TflApiPresentationEntitiesMatchedStop[];

  @SpeakeasyMetadata({ data: "json, name=statusErrorMessage" })
  statusErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stops", elemType: TflApiPresentationEntitiesMatchedStop })
  stops?: TflApiPresentationEntitiesMatchedStop[];

  @SpeakeasyMetadata({ data: "json, name=timetable" })
  timetable?: TflApiPresentationEntitiesTimetable;
}
