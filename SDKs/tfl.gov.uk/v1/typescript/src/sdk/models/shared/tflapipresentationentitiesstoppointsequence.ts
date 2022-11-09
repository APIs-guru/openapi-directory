import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";

export enum TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class TflApiPresentationEntitiesStopPointSequence extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchId" })
  branchId?: number;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=nextBranchIds" })
  nextBranchIds?: number[];

  @Metadata({ data: "json, name=prevBranchIds" })
  prevBranchIds?: number[];

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum;

  @Metadata({ data: "json, name=stopPoint", elemType: shared.TflApiPresentationEntitiesMatchedStop })
  stopPoint?: TflApiPresentationEntitiesMatchedStop[];
}
