import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntryForApiContract } from "./entryforapicontract";


export class PartialFindResultEntryForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EntryForApiContract })
  items?: EntryForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
