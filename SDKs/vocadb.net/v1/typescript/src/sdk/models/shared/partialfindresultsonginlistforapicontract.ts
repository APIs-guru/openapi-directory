import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SongInListForApiContract } from "./songinlistforapicontract";


export class PartialFindResultSongInListForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SongInListForApiContract })
  items?: SongInListForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
