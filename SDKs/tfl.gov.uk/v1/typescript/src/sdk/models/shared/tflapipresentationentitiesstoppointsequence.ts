import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";


export enum TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum {
    Regular = "Regular",
    Night = "Night"
}


export class TflApiPresentationEntitiesStopPointSequence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchId" })
  branchId?: number;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=nextBranchIds" })
  nextBranchIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=prevBranchIds" })
  prevBranchIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=stopPoint", elemType: TflApiPresentationEntitiesMatchedStop })
  stopPoint?: TflApiPresentationEntitiesMatchedStop[];
}
