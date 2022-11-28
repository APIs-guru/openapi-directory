import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DashboardRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=position_json" })
  positionJson?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: number[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}
