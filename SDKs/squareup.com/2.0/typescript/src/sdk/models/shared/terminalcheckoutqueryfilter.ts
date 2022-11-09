import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";


export class TerminalCheckoutQueryFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: TimeRange;

  @Metadata({ data: "json, name=device_id" })
  deviceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
