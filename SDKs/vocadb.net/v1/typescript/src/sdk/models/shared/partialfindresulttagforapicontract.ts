import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagForApiContract } from "./tagforapicontract";



export class PartialFindResultTagForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: TagForApiContract })
  items?: TagForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
