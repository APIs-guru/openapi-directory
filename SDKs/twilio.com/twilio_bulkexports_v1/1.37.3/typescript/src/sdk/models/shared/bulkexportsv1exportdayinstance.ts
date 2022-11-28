import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkexportsV1ExportDayInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirect_to" })
  redirectTo?: string;
}
