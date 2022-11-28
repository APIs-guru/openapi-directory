import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta42 } from "./meta42";



export class LogRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard_id" })
  dashboardId?: number;

  @SpeakeasyMetadata({ data: "json, name=dttm" })
  dttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: string;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_id" })
  sliceId?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: Meta42;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
