import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryForApiContract } from "./entryforapicontract";



export class PartialFindResultEntryForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EntryForApiContract })
  items?: EntryForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
