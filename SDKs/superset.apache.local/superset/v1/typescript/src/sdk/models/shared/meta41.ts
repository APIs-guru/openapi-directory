import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta41 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
