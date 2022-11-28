import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseEventSeriesForApiContract } from "./releaseeventseriesforapicontract";



export class PartialFindResultReleaseEventSeriesForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ReleaseEventSeriesForApiContract })
  items?: ReleaseEventSeriesForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
