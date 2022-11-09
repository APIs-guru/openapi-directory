import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityEntryForApiContract } from "./activityentryforapicontract";


export class PartialFindResultActivityEntryForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ActivityEntryForApiContract })
  items?: ActivityEntryForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
