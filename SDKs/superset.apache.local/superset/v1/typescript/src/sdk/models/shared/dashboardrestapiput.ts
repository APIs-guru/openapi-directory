import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DashboardRestApiPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=position_json" })
  positionJson?: string;

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=roles" })
  roles?: number[];

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}
