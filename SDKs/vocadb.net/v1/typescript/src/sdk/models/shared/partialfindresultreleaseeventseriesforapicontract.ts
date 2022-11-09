import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReleaseEventSeriesForApiContract } from "./releaseeventseriesforapicontract";


export class PartialFindResultReleaseEventSeriesForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ReleaseEventSeriesForApiContract })
  items?: ReleaseEventSeriesForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
