import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersSystemPackageInline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=evra" })
  evra?: string;

  @SpeakeasyMetadata({ data: "json, name=latest_evra" })
  latestEvra?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=updatable" })
  updatable?: boolean;
}
