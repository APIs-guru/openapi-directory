import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagForApiContract } from "./tagforapicontract";


export class PartialFindResultTagForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.TagForApiContract })
  items?: TagForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
