import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";



export class PartialFindResultReleaseEventForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ReleaseEventForApiContract })
  items?: ReleaseEventForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
