import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta9 extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
