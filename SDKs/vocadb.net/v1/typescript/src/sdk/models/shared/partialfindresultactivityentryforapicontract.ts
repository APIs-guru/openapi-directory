import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityEntryForApiContract } from "./activityentryforapicontract";



export class PartialFindResultActivityEntryForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ActivityEntryForApiContract })
  items?: ActivityEntryForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
