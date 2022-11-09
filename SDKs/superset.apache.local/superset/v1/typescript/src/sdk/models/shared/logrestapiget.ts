import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta43 } from "./meta43";


export class LogRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=dashboard_id" })
  dashboardId?: number;

  @Metadata({ data: "json, name=dttm" })
  dttm?: Date;

  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=json" })
  json?: string;

  @Metadata({ data: "json, name=referrer" })
  referrer?: string;

  @Metadata({ data: "json, name=slice_id" })
  sliceId?: number;

  @Metadata({ data: "json, name=user" })
  user?: Meta43;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
