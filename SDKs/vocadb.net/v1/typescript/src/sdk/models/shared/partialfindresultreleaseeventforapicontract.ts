import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";


export class PartialFindResultReleaseEventForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ReleaseEventForApiContract })
  items?: ReleaseEventForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
